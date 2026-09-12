"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";

interface BookItem {
  title: string;
  cat: string;
  val: number;
}

const bookData: BookItem[] = [
  // Tech & Engineering Architecture
  { title: "Build an LLM from Scratch", cat: "Tech", val: 8 },
  { title: "Life 3.0 (Tegmark)", cat: "Tech", val: 6 },
  { title: "Algorithms to Live By", cat: "Tech", val: 6 },
  { title: "The Innovators (Isaacson)", cat: "Tech", val: 5 },
  { title: "AR for Dummies", cat: "Tech", val: 4 },

  // Entrepreneurship & Business
  { title: "Zero to One", cat: "Business", val: 8 },
  { title: "Lean Startup Method", cat: "Business", val: 7 },
  { title: "Hard Things About Hard Things", cat: "Business", val: 7 },
  { title: "Shoe Dog", cat: "Business", val: 7 },
  { title: "Psychology of Money", cat: "Business", val: 6 },
  { title: "Innovator's Dilemma", cat: "Business", val: 5 },
  { title: "Think and Grow Rich", cat: "Business", val: 5 },
  { title: "The Everything Store", cat: "Business", val: 5 },
  { title: "4-Hour Workweek", cat: "Business", val: 5 },
  { title: "Richest Man in Babylon", cat: "Business", val: 4 },
  { title: "Path to Prosperity", cat: "Business", val: 4 },

  // Biographies & Memoirs
  { title: "Elon Musk (Isaacson)", cat: "Memoirs", val: 8 },
  { title: "Steve Jobs (Isaacson)", cat: "Memoirs", val: 8 },
  { title: "Wings of Fire (Kalam)", cat: "Memoirs", val: 7 },
  { title: "Nikola Tesla Autobiography", cat: "Memoirs", val: 6 },
  { title: "Experiments with Truth (Gandhi)", cat: "Memoirs", val: 6 },
  { title: "Benjamin Franklin", cat: "Memoirs", val: 5 },
  { title: "My Journey (Kalam)", cat: "Memoirs", val: 5 },
  { title: "Musk (Ashlee Vance)", cat: "Memoirs", val: 5 },
  { title: "Milkha Singh", cat: "Memoirs", val: 4 },

  // Philosophy & Metacognition
  { title: "Man's Search for Meaning", cat: "Philosophy", val: 8 },
  { title: "Sapiens (Harari)", cat: "Philosophy", val: 8 },
  { title: "48 Laws of Power", cat: "Philosophy", val: 7 },
  { title: "Siddhartha (Hesse)", cat: "Philosophy", val: 6 },
  { title: "The Alchemist", cat: "Philosophy", val: 6 },
  { title: "Tuesdays with Morrie", cat: "Philosophy", val: 5 },
  { title: "Chanakya Neeti", cat: "Philosophy", val: 5 },
  { title: "Monk Who Sold His Ferrari", cat: "Philosophy", val: 5 },
  { title: "Ikigai", cat: "Philosophy", val: 4 },
  { title: "As a Man Thinketh", cat: "Philosophy", val: 4 },

  // Productivity & Mastery
  { title: "Deep Work (Newport)", cat: "Productivity", val: 8 },
  { title: "Atomic Habits (Clear)", cat: "Productivity", val: 8 },
  { title: "Mastery (Greene)", cat: "Productivity", val: 7 },
  { title: "7 Habits of Highly Effective People", cat: "Productivity", val: 6 },
  { title: "Hyperfocus", cat: "Productivity", val: 5 },
  { title: "Steal Like an Artist", cat: "Productivity", val: 5 },
  { title: "How to Win Friends & Influence", cat: "Productivity", val: 6 },
  { title: "Dopamine Detox", cat: "Productivity", val: 4 },
  { title: "Power of Self-Discipline", cat: "Productivity", val: 4 },
];

const CATEGORY_COLORS: Record<string, { bg: string; border: string; badge: string; text: string }> = {
  Tech: { bg: "rgba(59, 130, 246, 0.2)", border: "#3b82f6", badge: "bg-blue-500/20 text-blue-400 border-blue-500/30", text: "#60a5fa" },
  Business: { bg: "rgba(245, 158, 11, 0.2)", border: "#f59e0b", badge: "bg-amber-500/20 text-amber-400 border-amber-500/30", text: "#fbbf24" },
  Memoirs: { bg: "rgba(236, 72, 153, 0.2)", border: "#ec4899", badge: "bg-pink-500/20 text-pink-400 border-pink-500/30", text: "#f472b6" },
  Philosophy: { bg: "rgba(139, 92, 246, 0.2)", border: "#8b5cf6", badge: "bg-purple-500/20 text-purple-400 border-purple-500/30", text: "#a78bfa" },
  Productivity: { bg: "rgba(16, 185, 129, 0.2)", border: "#10b981", badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", text: "#34d399" },
};

export default function BookGalaxy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState<BookItem | null>(null);

  const categories = useMemo(() => Array.from(new Set(bookData.map((d) => d.cat))), []);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 900;
    const height = 480;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg.selectAll("*").remove();

    const rootData = {
      name: "root",
      children: categories.map((cat) => ({
        name: cat,
        children: bookData.filter((b) => b.cat === cat),
      })),
    };

    const root = d3.hierarchy<any>(rootData)
      .sum((d: any) => d.val || 0)
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    // Pure tile layout: no category headers, no vertical padding offsets
    d3.treemap<any>()
      .size([width, height])
      .paddingInner(3)
      .paddingOuter(3)
      .round(true)(root);

    // Leaf cells (Book Cards)
    const leaves = svg.selectAll(".leaf")
      .data(root.leaves())
      .join("g")
      .attr("class", "leaf")
      .attr("transform", (d: any) => `translate(${d.x0},${d.y0})`);

    leaves.append("rect")
      .attr("width", (d: any) => Math.max(0, d.x1 - d.x0))
      .attr("height", (d: any) => Math.max(0, d.y1 - d.y0))
      .attr("rx", 6)
      .attr("fill", (d: any) => CATEGORY_COLORS[d.data.cat]?.bg || "#1e293b")
      .attr("stroke", (d: any) => CATEGORY_COLORS[d.data.cat]?.border || "#475569")
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.45)
      .style("cursor", "pointer")
      .style("transition", "all 0.2s ease");

    // Clean text rendering inside tiles
    leaves.each(function (d: any) {
      const g = d3.select(this);
      const w = d.x1 - d.x0;
      const h = d.y1 - d.y0;

      if (w < 42 || h < 24) return;

      const title: string = d.data.title;
      const maxChars = Math.max(8, Math.floor(w / 7.2));
      const words = title.split(" ");

      let line1 = "";
      let line2 = "";

      for (const word of words) {
        if ((line1 + " " + word).trim().length <= maxChars) {
          line1 = (line1 + " " + word).trim();
        } else if ((line2 + " " + word).trim().length <= maxChars) {
          line2 = (line2 + " " + word).trim();
        } else if (!line2) {
          line2 = word;
        }
      }

      if (words.length > 2 && line2.length > maxChars - 2) {
        line2 = line2.slice(0, Math.max(4, maxChars - 2)) + "…";
      }

      const textElement = g.append("text")
        .attr("x", 8)
        .attr("fill", "#f8fafc")
        .style("font-size", w < 75 || h < 45 ? "10px" : "11px")
        .style("font-weight", "600")
        .style("pointer-events", "none");

      if (!line2 || h < 46) {
        textElement
          .attr("y", Math.min(22, h / 2 + 4))
          .text(line1.length > maxChars ? line1.slice(0, maxChars - 1) + "…" : line1);
      } else {
        textElement
          .attr("y", 18)
          .append("tspan")
          .attr("x", 8)
          .attr("dy", 0)
          .text(line1);

        textElement
          .append("tspan")
          .attr("x", 8)
          .attr("dy", "1.25em")
          .text(line2);
      }
    });

    leaves
      .on("mouseenter", function (event, d: any) {
        setHoveredItem(d.data);
        d3.select(this).raise();
        d3.select(this).select("rect")
          .transition().duration(150)
          .attr("stroke-width", 2)
          .attr("stroke-opacity", 1)
          .attr("fill", "#1e293b");
      })
      .on("mouseleave", function (event, d: any) {
        setHoveredItem(null);
        d3.select(this).select("rect")
          .transition().duration(150)
          .attr("stroke-width", 1)
          .attr("stroke-opacity", 0.45)
          .attr("fill", CATEGORY_COLORS[d.data.cat]?.bg || "#1e293b");
      });

  }, [categories]);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    svg.selectAll(".leaf").each(function (d: any) {
      const matchesCat = !selectedCat || d.data.cat === selectedCat;
      const matchesSearch = !searchQuery || d.data.title.toLowerCase().includes(searchQuery.toLowerCase());
      const isVisible = matchesCat && matchesSearch;

      d3.select(this)
        .transition().duration(200)
        .style("opacity", isVisible ? 1 : 0.12)
        .style("filter", isVisible ? "none" : "grayscale(80%)");
    });
  }, [selectedCat, searchQuery]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 shadow-2xl p-6 relative overflow-hidden flex flex-col justify-between"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
        <div>
          <h3 className="text-white text-xl font-bold tracking-tight">Intellectual DNA</h3>
          <p className="text-slate-400 text-xs mt-0.5">
            D3 Treemap: Systems thinking, business, and literature driving my engineering mindset
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search book..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-1 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-28 md:w-36"
          />

          <button
            onClick={() => setSelectedCat(null)}
            className={`text-[11px] px-2.5 py-1 rounded-xl font-semibold transition-all ${
              selectedCat === null ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            All
          </button>

          {categories.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(isActive ? null : cat)}
                className={`text-[11px] px-2.5 py-1 rounded-xl font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? "bg-white text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[cat]?.border }}
                />
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full relative">
        <svg ref={svgRef} className="w-full h-[480px]" />

        {hoveredItem && (
          <div className="absolute bottom-3 left-3 pointer-events-none z-20 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="bg-slate-950/95 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3">
              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md font-bold border ${CATEGORY_COLORS[hoveredItem.cat]?.badge}`}>
                {hoveredItem.cat}
              </span>
              <div>
                <h4 className="text-white text-xs font-bold">{hoveredItem.title}</h4>
                <p className="text-slate-400 text-[10px]">Impact Weight: <span className="text-white font-semibold">{hoveredItem.val} / 8</span></p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800/60 mt-2">
        <span>Cell size represents foundational influence weight</span>
        <span>{bookData.length} Total Volumes Analyzed</span>
      </div>
    </div>
  );
}