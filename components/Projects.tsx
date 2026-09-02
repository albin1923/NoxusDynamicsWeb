'use client';

import { ArrowUpRight, ExternalLink, Clock } from "lucide-react";

export function Projects() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: "01",
      name: "LAMINA",
      category: "Agri-Robotics",
      badge: "Under Development",
      statusColor: "#e2241f",
      description: "An autonomous modular rig engineered for high-precision canopy management and soil monitoring.",
      type: "internal",
      linkText: "[ Get Notified ]",
      action: scrollToContact,
      href: null,
      highlight: "Robotics & Hardware"
    },
    {
      id: "02",
      name: "Cedar Initiative",
      subTag: "by NoxusDynamics",
      category: "AI & Agriculture",
      badge: "Active Program",
      statusColor: "#22c55e",
      description: "An advanced AI model training and real-world implementation program deploying scalable machine learning solutions for agriculture.",
      type: "internal",
      linkText: "[ Register Now ]",
      action: null,
      href: "/cedar-initiative",
      highlight: "Machine Learning"
    },
    {
      id: "03",
      name: "PropKeep.in",
      subTag: "NRI Property Care",
      category: "PropTech & Real Estate",
      badge: "Live Platform",
      statusColor: "#22c55e",
      description: "Kerala's premier NRI property management platform. Trust-first digital portal streamlining tenant care, maintenance tracking, and remote asset coordination.",
      type: "external",
      linkText: "[ Visit PropKeep.in ]",
      action: null,
      href: "https://propkeep.in/",
      highlight: "Web Application"
    },
    {
      id: "04",
      name: "Honda Inventory System",
      subTag: "Enterprise Logistics",
      category: "Supply Chain & Logistics",
      badge: "Deployed System",
      statusColor: "#3b82f6",
      description: "Custom enterprise inventory management platform built for Honda distribution networks. Features automated stock auditing, live alerts, and telemetry tracking.",
      type: "internal",
      linkText: "[ Request System Demo ]",
      action: scrollToContact,
      href: null,
      highlight: "Enterprise Software"
    },
    {
      id: "05",
      name: "Leap Physiotherapy",
      subTag: "Healthcare Client",
      category: "Healthcare & Booking",
      badge: "Live Client Site",
      statusColor: "#22c55e",
      description: "A conversion-focused clinical web app for a premier physiotherapy practice. Features streamlined appointment booking and responsive patient storytelling.",
      type: "external",
      linkText: "[ Visit Site ]",
      action: null,
      href: "https://leap-web-phi.vercel.app/",
      highlight: "Digital Product"
    }
  ];

  const ongoingProjects = [
    {
      name: "Revo Cafe",
      category: "Hospitality & Brand Experience",
      status: "Active Development",
      description: "Craft coffee digital ecosystem, interactive menu showcase, and online brand experience."
    },
    {
      name: "Red Jewels",
      category: "Luxury E-Commerce & Retail",
      status: "UI/UX & Engineering Phase",
      description: "High-end luxury jewelry showcase and bespoke digital showroom experience."
    }
  ];

  return (
    <div id="projects" className="bg-[#f4f4f2] text-[#1a1c1c] selection:bg-[#e2241f] selection:text-white">
      {/* ===== MOBILE VIEW (< md) ===== */}
      <section className="md:hidden relative w-full py-10 px-4 overflow-hidden" aria-labelledby="projects-title-mobile">
        {/* Section Header */}
        <div className="mb-8 border-b border-[#1a1c1c]/15 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#e2241f]"></span>
            <span className="font-mono-terminal text-[10px] uppercase tracking-widest text-[#e2241f] font-bold">Portfolios & Systems</span>
          </div>
          <h2 id="projects-title-mobile" className="font-headline-terminal text-3xl font-black text-[#1a1c1c] tracking-tight uppercase leading-none">
            Featured Works
          </h2>
          <p className="font-body-terminal text-xs text-[#1a1c1c]/70 mt-2 leading-relaxed">
            Custom software systems, agritech platforms, and bespoke digital experiences engineered by Noxus.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-4">
          {projects.map((item) => (
            <div key={item.id} className="border-2 border-[#1a1c1c] bg-white p-5 relative flex flex-col justify-between shadow-[4px_4px_0px_0px_#1a1c1c]">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-[#1a1c1c]/10 pb-2">
                  <span className="font-mono-terminal text-[10px] font-bold tracking-widest text-[#1a1c1c]/50">[{item.id}]</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: item.statusColor }}></span>
                    <span className="font-mono-terminal text-[9px] uppercase font-bold tracking-wider" style={{ color: item.statusColor }}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <h3 className="font-headline-terminal text-2xl font-black text-[#1a1c1c] leading-tight mb-1">
                  {item.name}
                </h3>
                {item.subTag && (
                  <span className="block font-mono-terminal text-[10px] font-bold text-[#e2241f] uppercase tracking-wider mb-2">
                    {item.subTag}
                  </span>
                )}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  <span className="inline-block bg-[#1a1c1c]/5 font-mono-terminal text-[9px] uppercase tracking-wider text-[#1a1c1c]/70 px-2 py-0.5 border border-[#1a1c1c]/10">
                    {item.category}
                  </span>
                  <span className="inline-block bg-[#e2241f]/10 font-mono-terminal text-[9px] uppercase tracking-wider text-[#e2241f] px-2 py-0.5 border border-[#e2241f]/20 font-bold">
                    {item.highlight}
                  </span>
                </div>

                <p className="font-body-terminal text-xs text-[#1a1c1c]/75 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  target={item.type === 'external' ? '_blank' : '_self'}
                  rel={item.type === 'external' ? 'noopener noreferrer' : ''}
                  className="bg-[#1a1c1c] text-white px-4 py-3 font-mono-terminal text-[10px] font-bold tracking-widest uppercase hover:bg-[#e2241f] transition-colors flex items-center justify-between cursor-pointer min-h-[44px] w-full"
                >
                  <span>{item.linkText}</span>
                  {item.type === 'external' ? <ExternalLink className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />}
                </a>
              ) : (
                <button
                  onClick={item.action || undefined}
                  className="bg-[#1a1c1c] text-white px-4 py-3 font-mono-terminal text-[10px] font-bold tracking-widest uppercase hover:bg-[#e2241f] transition-colors flex items-center justify-between cursor-pointer min-h-[44px] w-full"
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Ongoing Projects Mobile Banner */}
        <div className="mt-8 border-2 border-[#1a1c1c] bg-[#1a1c1c] text-white p-5 shadow-[4px_4px_0px_0px_#e2241f]">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-3.5 h-3.5 text-[#e2241f] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-mono-terminal text-[10px] uppercase font-bold tracking-widest text-[#e2241f]">Ongoing Builds & Labs</span>
          </div>
          <div className="divide-y divide-white/10">
            {ongoingProjects.map((item, idx) => (
              <div key={idx} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-headline-terminal text-lg font-bold text-white uppercase">{item.name}</h4>
                  <span className="font-mono-terminal text-[8px] bg-[#e2241f]/20 border border-[#e2241f]/40 text-[#e2241f] px-1.5 py-0.5 uppercase tracking-wider font-bold">
                    {item.status}
                  </span>
                </div>
                <p className="font-mono-terminal text-[10px] text-white/50 mb-1">{item.category}</p>
                <p className="font-body-terminal text-xs text-white/70 leading-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* View More Work Button - Mobile */}
        <div className="mt-8 text-center">
          <a
            href="/studios.html"
            className="inline-flex items-center justify-between gap-4 w-full bg-[#e2241f] hover:bg-[#1a1c1c] text-white font-mono-terminal text-xs font-bold uppercase tracking-widest px-5 py-4 border-2 border-[#1a1c1c] shadow-[4px_4px_0px_0px_#1a1c1c] active:translate-y-[2px] active:shadow-none transition-all duration-200"
          >
            <span>[ EXPLORE ALL STUDIOS WORK ]</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>
      </section>

      {/* ===== DESKTOP VIEW (md:+) ===== */}
      <section className="hidden md:block px-6 md:px-12 py-20 bg-[#f4f4f2] relative overflow-hidden" aria-labelledby="projects-title">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1a1c1c] pb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-[#e2241f]"></span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e2241f]">Selected Engineering & Digital Projects</span>
              </div>
              <h2 id="projects-title" className="font-headline-terminal font-black tracking-tight leading-none text-[#1a1c1c]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}>
                OUR WORKS & SYSTEMS
              </h2>
            </div>
            <div className="mt-6 md:mt-0 text-right max-w-sm">
              <p className="font-body-terminal text-sm opacity-75 font-medium leading-relaxed">
                Precision hardware, AI initiatives, enterprise inventory software, and bespoke web platforms built for real-world impact.
              </p>
            </div>
          </div>

          {/* 5 Projects + Ongoing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((item) => (
              <div
                key={item.id}
                className="border-2 border-[#1a1c1c] bg-white relative flex flex-col justify-between group shadow-[6px_6px_0px_0px_#1a1c1c] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#1a1c1c] transition-all duration-300 overflow-hidden"
              >
                {/* Tech grid background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1a1c1c 1px, transparent 1px), linear-gradient(90deg, #1a1c1c 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="p-8 relative z-10 flex flex-col h-full">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6 border-b border-[#1a1c1c]/10 pb-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#1a1c1c]/50">
                      [SYS-{item.id}]
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: item.statusColor }}></span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: item.statusColor }}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-4">
                    <h3 className="font-headline-terminal text-3xl font-black text-[#1a1c1c] tracking-tight leading-tight group-hover:text-[#e2241f] transition-colors">
                      {item.name}
                    </h3>
                    {item.subTag && (
                      <span className="block font-mono text-xs font-bold text-[#e2241f] uppercase tracking-wider mt-1">
                        {item.subTag}
                      </span>
                    )}
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#1a1c1c]/5 text-[#1a1c1c] px-2.5 py-1 border border-[#1a1c1c]/15">
                      {item.category}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#e2241f]/10 text-[#e2241f] px-2.5 py-1 border border-[#e2241f]/20">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body-terminal text-sm text-[#1a1c1c]/70 leading-relaxed font-medium mb-8 flex-grow">
                    {item.description}
                  </p>

                  {/* Button CTA */}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.type === 'external' ? '_blank' : '_self'}
                      rel={item.type === 'external' ? 'noopener noreferrer' : ''}
                      className="bg-[#1a1c1c] text-white px-6 py-3.5 font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#e2241f] transition-colors flex items-center justify-between gap-3 cursor-pointer w-full mt-auto min-h-[44px]"
                    >
                      <span>{item.linkText}</span>
                      {item.type === 'external' ? <ExternalLink className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4 stroke-[3]" />}
                    </a>
                  ) : (
                    <button
                      onClick={item.action || undefined}
                      className="bg-[#1a1c1c] text-white px-6 py-3.5 font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#e2241f] transition-colors flex items-center justify-between gap-3 cursor-pointer w-full mt-auto min-h-[44px]"
                    >
                      <span>{item.linkText}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Dedicated Ongoing Projects Card in Desktop Grid */}
            <div className="border-2 border-[#1a1c1c] bg-[#1a1c1c] text-white relative flex flex-col justify-between p-8 shadow-[6px_6px_0px_0px_#e2241f]">
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#e2241f] flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                    [ONGOING LABS]
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/50">
                    Active Builds
                  </span>
                </div>

                <h3 className="font-headline-terminal text-2xl font-black text-white tracking-tight uppercase mb-4">
                  Ongoing Projects
                </h3>

                <div className="space-y-6 divide-y divide-white/10">
                  {ongoingProjects.map((item, idx) => (
                    <div key={idx} className="pt-4 first:pt-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-headline-terminal text-xl font-bold text-[#e2241f]">{item.name}</h4>
                        <span className="font-mono text-[9px] bg-white/10 border border-white/20 text-white px-2 py-0.5 uppercase tracking-wider font-bold">
                          {item.status}
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-white/60 mb-2">{item.category}</p>
                      <p className="font-body-terminal text-xs text-white/80 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-white/10 hover:bg-[#e2241f] text-white px-4 py-3 font-mono text-xs uppercase font-bold tracking-widest border border-white/20 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>[ INQUIRE FOR CUSTOM BUILD ]</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* View More Work Banner Button - Desktop */}
          <div className="border-2 border-[#1a1c1c] bg-[#1a1c1c] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_#e2241f]">
            <div className="text-white">
              <span className="font-mono text-xs font-bold text-[#e2241f] uppercase tracking-widest block mb-1">
                Explore Full Digital Portfolio
              </span>
              <h3 className="font-headline-terminal text-2xl md:text-3xl font-black tracking-tight uppercase">
                Want to see our full list of client works & digital case studies?
              </h3>
            </div>
            <a
              href="/studios.html"
              className="bg-[#e2241f] hover:bg-white text-white hover:text-[#1a1c1c] font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-8 py-4 border-2 border-white transition-all duration-300 flex items-center gap-3 shrink-0 cursor-pointer shadow-[4px_4px_0px_0px_#ffffff]"
            >
              <span>[ VIEW MORE WORK AT NOXUS STUDIOS ]</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}