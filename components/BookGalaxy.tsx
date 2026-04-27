"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const bookData = [
  // Entrepreneurship & Business
  { title: "Think and Grow Rich", cat: "Business", val: 6 },
  { title: "Zero to One", cat: "Entrepreneurship", val: 6 },
  { title: "Hard Things About Hard Things", cat: "Entrepreneurship", val: 5 },
  { title: "Lean Startup Method", cat: "Entrepreneurship", val: 5 },
  { title: "4-Hour Workweek", cat: "Entrepreneurship", val: 5 },
  { title: "Shoe Dog", cat: "Business", val: 6 },
  { title: "Everything Store", cat: "Business", val: 5 },
  { title: "Richest man in Babylon", cat: "Business", val: 4 },
  { title: "Success through PMA", cat: "Business", val: 4 },
  { title: "Magic of thinking big", cat: "Business", val: 4 },
  { title: "Pysc of Money", cat: "Business", val: 5 },
  { title: "Innovators Dilemma", cat: "Business", val: 5 },
  { title: "Path to Prosperity", cat: "Business", val: 4 },

  // Memoirs & Biographies
  { title: "Elon Musk (Isaacson)", cat: "Memoirs", val: 6 },
  { title: "Musk (Ashlee Vance)", cat: "Memoirs", val: 5 },
  { title: "Jobs (Isaacson)", cat: "Memoirs", val: 6 },
  { title: "Tesla (Autobiography)", cat: "Memoirs", val: 5 },
  { title: "Benjamin Franklin", cat: "Memoirs", val: 5 },
  { title: "Experiments with truth (Gandhi)", cat: "Memoirs", val: 6 },
  { title: "Wings of Fire (Kalam)", cat: "Memoirs", val: 6 },
  { title: "My Journey (Kalam)", cat: "Memoirs", val: 5 },
  { title: "Milkha Singh", cat: "Memoirs", val: 4 },
  { title: "Priyanka Chopra Unfinished", cat: "Memoirs", val: 4 },
  { title: "The Innovators (Isaacson)", cat: "Memoirs", val: 5 },

  // Philosophy & Spirituality
  { title: "Man's Search for Survival", cat: "Philosophy", val: 6 },
  { title: "Homo Sapiens", cat: "Philosophy", val: 6 },
  { title: "Theory of Everything", cat: "Philosophy", val: 5 },
  { title: "Siddhartha", cat: "Philosophy", val: 5 },
  { title: "Chanakya Neeti", cat: "Philosophy", val: 5 },
  { title: "Ikigai", cat: "Philosophy", val: 4 },
  { title: "Inner Peace", cat: "Philosophy", val: 4 },
  { title: "As a man thinketh", cat: "Philosophy", val: 4 },
  { title: "Monk who sold his ferrari", cat: "Philosophy", val: 5 },
  { title: "Think like a monk", cat: "Philosophy", val: 4 },
  { title: "Tuesdays with Morrie", cat: "Philosophy", val: 5 },
  { title: "The Alchemist", cat: "Philosophy", val: 5 },
  { title: "48 Laws of Power", cat: "Philosophy", val: 5 },

  // Tech & Science
  { title: "Life 3.0 (Tegmark)", cat: "Tech", val: 6 },
  { title: "Algos to live by", cat: "Tech", val: 5 },
  { title: "AR for dummies", cat: "Tech", val: 3 },
  
  // Productivity & Soft Skills
  { title: "Deep Work", cat: "Productivity", val: 6 },
  { title: "Atomic Habits", cat: "Productivity", val: 6 },
  { title: "Hyperfocus", cat: "Productivity", val: 5 },
  { title: "Dopamine Detox", cat: "Productivity", val: 4 },
  { title: "7 Habits", cat: "Productivity", val: 6 },
  { title: "Mastery", cat: "Productivity", val: 5 },
  { title: "Do it today", cat: "Productivity", val: 4 },
  { title: "Power of self discipline", cat: "Productivity", val: 4 },
  { title: "How to Study", cat: "Productivity", val: 3 },
  { title: "Public Speaking", cat: "Soft Skills", val: 5 },
  { title: "How to Win Friends", cat: "Soft Skills", val: 6 },
  { title: "Body Language", cat: "Soft Skills", val: 4 },
  { title: "How to talk to anyone", cat: "Soft Skills", val: 4 },
  { title: "Rudest book ever", cat: "Soft Skills", val: 4 },
  { title: "Confidence", cat: "Soft Skills", val: 4 },
  
  // Mindset & Psychology
  { title: "Mindset", cat: "Psychology", val: 5 },
  { title: "Power of positive attitude", cat: "Psychology", val: 5 },
  { title: "Attitude is everything", cat: "Psychology", val: 5 },
  { title: "Magic of thinking big", cat: "Psychology", val: 5 },
  { title: "Positive Attitude", cat: "Psychology", val: 4 },
  { title: "Find passion", cat: "Psychology", val: 4 },
  { title: "Who moved my cheese", cat: "Psychology", val: 4 },
  { title: "Who will cry when you die", cat: "Psychology", val: 4 },
  { title: "Live 24 hours a day", cat: "Psychology", val: 4 },
  { title: "55 questions", cat: "Psychology", val: 3 },
  { title: "Steal like an Artist", cat: "Creative", val: 4 },
  { title: "Keep Going", cat: "Creative", val: 4 },
  { title: "Intelligent Life", cat: "Psychology", val: 4 },
  { title: "Positive thinking (teenagers)", cat: "Psychology", val: 3 },
  { title: "Journey (Brandon Bays)", cat: "Philosophy", val: 4 }
];

export default function BookGalaxy() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 700; // Increased height for more books

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg.selectAll("*").remove();

    const colorScale = d3.scaleOrdinal()
      .domain(["Business", "Memoirs", "Philosophy", "Entrepreneurship", "Tech", "Productivity", "Soft Skills", "Psychology", "Creative"])
      .range(["#60a5fa", "#f472b6", "#a78bfa", "#fbbf24", "#34d399", "#94a3b8", "#f87171", "#818cf8", "#c084fc"]);

    const simulation = d3.forceSimulation(bookData as any)
      .force("x", d3.forceX(width / 2).strength(0.07))
      .force("y", d3.forceY(height / 2).strength(0.07))
      .force("collide", d3.forceCollide((d: any) => d.val * 6 + 4))
      .force("charge", d3.forceManyBody().strength(-20));

    const nodes = svg.append("g")
      .selectAll("g")
      .data(bookData)
      .join("g")
      .style("cursor", "pointer");

    nodes.append("circle")
      .attr("r", (d) => d.val * 6)
      .attr("fill", (d) => colorScale(d.cat) as string)
      .attr("fill-opacity", 0.4)
      .attr("stroke", (d) => colorScale(d.cat) as string)
      .attr("stroke-width", 1.5);

    // Initial text (hidden or small)
    const labels = nodes.append("text")
      .text((d) => d.title)
      .attr("text-anchor", "middle")
      .attr("dy", ".3em")
      .attr("fill", "white")
      .style("font-size", "0px") // Hide text initially to prevent clutter
      .style("pointer-events", "none")
      .style("font-weight", "500");

    nodes.on("mouseenter", function(event, d) {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("fill-opacity", 1)
        .attr("r", d.val * 8)
        .attr("stroke-width", 3);
      
      d3.select(this).select("text")
        .transition().duration(200)
        .style("font-size", "12px");
    }).on("mouseleave", function(event, d) {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("fill-opacity", 0.4)
        .attr("r", d.val * 6)
        .attr("stroke-width", 1.5);
      
      d3.select(this).select("text")
        .transition().duration(200)
        .style("font-size", "0px");
    });

    simulation.on("tick", () => {
      nodes.attr("transform", (d: any) => {
        // Simple boundary clamping
        d.x = Math.max(50, Math.min(width - 50, d.x));
        d.y = Math.max(50, Math.min(height - 50, d.y));
        return `translate(${d.x},${d.y})`;
      });
    });
  }, []);

  return (
    <div className="w-full bg-slate-900/20 backdrop-blur-sm rounded-3xl border border-slate-800/50 p-6 shadow-inner">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-white text-xl font-bold tracking-tight">The Literary Galaxy</h3>
          <p className="text-slate-500 text-xs uppercase tracking-widest mt-1 font-mono">Hover to explore 70+ influences</p>
        </div>
        <div className="flex flex-wrap gap-2 max-w-md justify-end">
          {["Business", "Philosophy", "Memoirs", "Tech", "Psychology"].map((cat) => (
            <span key={cat} className="text-[9px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              {cat}
            </span>
          ))}
        </div>
      </div>
      <svg ref={svgRef} className="w-full h-auto min-h-[400px]" />
    </div>
  );
}