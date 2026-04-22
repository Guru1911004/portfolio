"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const skills = [
  { id: "Next.js", group: "Frontend", size: 40 },
  { id: "TypeScript", group: "Frontend", size: 30 },
  { id: "LangChain", group: "AI", size: 45 },
  { id: "RAG", group: "AI", size: 35 },
  { id: "Vector DB", group: "AI", size: 30 },
  { id: "TensorFlow", group: "ML", size: 40 },
  { id: "Scikit-Learn", group: "ML", size: 35 },
  { id: "D3.js", group: "Data", size: 50 },
];

const links = [
  { source: "LangChain", target: "RAG" },
  { source: "RAG", target: "Vector DB" },
  { source: "Next.js", target: "D3.js" },
  { source: "TensorFlow", target: "Scikit-Learn" },
];

export default function SkillCloud() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 500;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("cursor", "grab");

    svg.selectAll("*").remove(); // Clear for hot-reloads

    const simulation = d3.forceSimulation(skills as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .attr("stroke", "#334155")
      .selectAll("line")
      .data(links)
      .join("line");

    const node = svg.append("g")
      .selectAll("g")
      .data(skills)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", (e, d) => {
          if (!e.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on("end", (e, d) => {
          if (!e.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        }));

    node.append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) => d.group === "AI" ? "#3b82f6" : "#10b981")
      .attr("opacity", 0.8);

    node.append("text")
      .text((d) => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .style("font-size", "12px")
      .style("font-weight", "bold");

    simulation.on("tick", () => {
      link.attr("x1", (d: any) => d.source.x)
          .attr("y1", (d: any) => d.source.y)
          .attr("x2", (d: any) => d.target.x)
          .attr("y2", (d: any) => d.target.y);
      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });
  }, []);

  return (
    <div className="w-full h-[600px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 relative">
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-white text-2xl font-bold">Interactive Ecosystem</h3>
        <p className="text-slate-400 text-sm">Drag to interact with my technical core</p>
      </div>
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
}