"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

// Define the data structure
const skills = [
  { id: "Next.js", group: "Frontend", size: 45 },
  { id: "TypeScript", group: "Frontend", size: 35 },
  { id: "LangChain", group: "AI", size: 50 },
  { id: "RAG", group: "AI", size: 40 },
  { id: "Vector DB", group: "AI", size: 35 },
  { id: "TensorFlow", group: "ML", size: 45 },
  { id: "Scikit-Learn", group: "ML", size: 35 },
  { id: "D3.js", group: "Data", size: 55 },
];

const links = [
  { source: "LangChain", target: "RAG" },
  { source: "RAG", target: "Vector DB" },
  { source: "Next.js", target: "D3.js" },
  { source: "TensorFlow", target: "Scikit-Learn" },
  { source: "Next.js", target: "TypeScript" },
];

export default function SkillCloud() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Define dimensions based on container or fixed viewBox
    const width = 800;
    const height = 500;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("cursor", "grab");

    svg.selectAll("*").remove(); // Cleanup for hot-reloads

    // Define the simulation with containment forces
    const simulation = d3.forceSimulation(skills as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.size + 10))
      // Gravity forces to prevent nodes from drifting off-screen
      .force("x", d3.forceX(width / 2).strength(0.15))
      .force("y", d3.forceY(height / 2).strength(0.15));

    // Create the links (lines)
    const link = svg.append("g")
      .attr("stroke", "#1e293b")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(links)
      .join("line");

    // Create the node groups
    const node = svg.append("g")
      .selectAll("g")
      .data(skills)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x; d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        }));

    // Add circles to nodes
    node.append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) => (d.group === "AI" ? "#3b82f6" : d.group === "Data" ? "#f59e0b" : "#10b981"))
      .attr("stroke", "#0f172a")
      .attr("stroke-width", 2)
      .attr("opacity", 0.9);

    // Add labels to nodes
    node.append("text")
      .text((d) => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .style("font-size", "14px")
      .style("font-weight", "600")
      .style("pointer-events", "none");

    // Hover interactions
    node.on("mouseenter", function() {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("fill", "#f8fafc")
        .attr("r", (d: any) => d.size + 8);
    }).on("mouseleave", function() {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("fill", (d: any) => (d.group === "AI" ? "#3b82f6" : d.group === "Data" ? "#f59e0b" : "#10b981"))
        .attr("r", (d: any) => d.size);
    });

    // Update positions on every tick
    simulation.on("tick", () => {
      // Boundary clamping logic: prevents nodes from crossing 0 or width/height
      node.attr("transform", (d: any) => {
        const radius = d.size;
        d.x = Math.max(radius, Math.min(width - radius, d.x));
        d.y = Math.max(radius, Math.min(height - radius, d.y));
        return `translate(${d.x},${d.y})`;
      });

      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
    });
  }, []);

  return (
    <div className="w-full bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
      <div className="absolute top-8 left-8 pointer-events-none">
        <h3 className="text-white text-2xl font-bold tracking-tight">Technical Ecosystem</h3>
        <p className="text-slate-400 text-sm mt-1">Force-directed interaction demonstrating skill synergy</p>
      </div>
      <svg ref={svgRef} className="w-full h-[500px]" />
    </div>
  );
}