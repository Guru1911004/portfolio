"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

// Unified Group Color Scheme
const GROUP_COLORS: Record<string, string> = {
  Frontend: "#10b981",  // Emerald Green
  Backend: "#6366f1",   // Indigo
  Database: "#06b6d4",  // Cyan
  AI: "#3b82f6",        // Blue
  ML: "#ec4899",        // Pink
  Data: "#f59e0b",      // Amber
  DevOps: "#8b5cf6",    // Purple
  Systems: "#64748b",   // Slate
};

const rawSkills = [
  // Frontend
  { id: "Next.js", group: "Frontend", size: 40 },
  { id: "React", group: "Frontend", size: 38 },
  { id: "TypeScript", group: "Frontend", size: 34 },
  { id: "Vue.js", group: "Frontend", size: 28 },

  // Backend
  { id: "FastAPI", group: "Backend", size: 38 },
  { id: "Node.js", group: "Backend", size: 36 },
  { id: "Python", group: "Backend", size: 42 },

  // Database / SQL
  { id: "SQL / MySQL", group: "Database", size: 34 },
  { id: "PostgreSQL", group: "Database", size: 32 },

  // AI & RAG
  { id: "LangChain", group: "AI", size: 42 },
  { id: "RAG", group: "AI", size: 38 },
  { id: "Vector DB", group: "AI", size: 34 },

  // Machine Learning
  { id: "TensorFlow", group: "ML", size: 34 },
  { id: "Scikit-Learn", group: "ML", size: 32 },

  // Data & Visualization
  { id: "D3.js", group: "Data", size: 42 },

  // DevOps & Cloud
  { id: "Docker", group: "DevOps", size: 32 },
  { id: "AWS", group: "DevOps", size: 30 },

  // Core Systems
  { id: "C++", group: "Systems", size: 28 },
  { id: "Java", group: "Systems", size: 28 },
];

const rawLinks = [
  // Frontend connections
  { source: "Next.js", target: "React" },
  { source: "Next.js", target: "TypeScript" },
  { source: "React", target: "Vue.js" },
  { source: "Next.js", target: "D3.js" },

  // Backend & Languages
  { source: "FastAPI", target: "Python" },
  { source: "Node.js", target: "TypeScript" },
  { source: "Next.js", target: "FastAPI" },

  // Database / SQL connections
  { source: "FastAPI", target: "SQL / MySQL" },
  { source: "SQL / MySQL", target: "PostgreSQL" },
  { source: "Node.js", target: "SQL / MySQL" },

  // AI & Vector DB
  { source: "Python", target: "LangChain" },
  { source: "LangChain", target: "RAG" },
  { source: "RAG", target: "Vector DB" },
  { source: "FastAPI", target: "LangChain" },

  // Machine Learning
  { source: "Python", target: "TensorFlow" },
  { source: "TensorFlow", target: "Scikit-Learn" },
  { source: "Scikit-Learn", target: "RAG" },

  // DevOps & Cloud
  { source: "Docker", target: "AWS" },
  { source: "FastAPI", target: "Docker" },

  // Systems
  { source: "C++", target: "Python" },
  { source: "Java", target: "Docker" },
];

export default function SkillCloud() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 850;
    const height = 550;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("cursor", "grab");

    svg.selectAll("*").remove(); // Cleanup for hot-reloads

    // Clone data to avoid in-place mutation issues across re-renders
    const skills = JSON.parse(JSON.stringify(rawSkills));
    const links = JSON.parse(JSON.stringify(rawLinks));

    // Simulation setup
    const simulation = d3.forceSimulation(skills)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(90))
      .force("charge", d3.forceManyBody().strength(-180))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.size + 14))
      .force("x", d3.forceX(width / 2).strength(0.12))
      .force("y", d3.forceY(height / 2).strength(0.12));

    // Link styling (semi-transparent slate lines)
    const link = svg.append("g")
      .attr("stroke", "#334155")
      .attr("stroke-width", 1.8)
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");

    // Node groups with drag listeners
    const node = svg.append("g")
      .selectAll("g")
      .data(skills)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    // Circle representation with group colors
    node.append("circle")
      .attr("r", (d: any) => d.size)
      .attr("fill", (d: any) => GROUP_COLORS[d.group] || "#3b82f6")
      .attr("stroke", "#020617")
      .attr("stroke-width", 2.5)
      .attr("opacity", 0.92);

    // Text labels
    node.append("text")
      .text((d: any) => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .style("font-size", (d: any) => (d.size > 36 ? "13px" : "11px"))
      .style("font-weight", "600")
      .style("letter-spacing", "-0.01em")
      .style("pointer-events", "none");

    // Interactive Hover States
    node.on("mouseenter", function (event, d: any) {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("fill", "#ffffff")
        .attr("stroke", GROUP_COLORS[d.group] || "#3b82f6")
        .attr("stroke-width", 3)
        .attr("r", d.size + 5);

      d3.select(this).select("text")
        .transition().duration(200)
        .attr("fill", "#020617");
    }).on("mouseleave", function (event, d: any) {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("fill", GROUP_COLORS[d.group] || "#3b82f6")
        .attr("stroke", "#020617")
        .attr("stroke-width", 2.5)
        .attr("r", d.size);

      d3.select(this).select("text")
        .transition().duration(200)
        .attr("fill", "#ffffff");
    });

    // Position updates per simulation tick
    simulation.on("tick", () => {
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

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="w-full bg-slate-900/60 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
      {/* Header Info */}
      <div className="absolute top-6 left-6 pointer-events-none z-10">
        <h3 className="text-white text-xl font-bold tracking-tight">Technical Ecosystem</h3>
        <p className="text-slate-400 text-xs mt-1">Force-directed relational skill graph</p>
      </div>

      {/* Category Legend */}
      <div className="absolute top-6 right-6 hidden md:flex flex-wrap gap-2 max-w-[320px] justify-end z-10 pointer-events-none">
        {Object.entries(GROUP_COLORS).map(([group, color]) => (
          <span
            key={group}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 border border-slate-800 text-[10px] font-mono text-slate-300"
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            {group}
          </span>
        ))}
      </div>

      <svg ref={svgRef} className="w-full h-[550px]" />
    </div>
  );
}