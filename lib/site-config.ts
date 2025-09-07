export const site = {
  brand: {
    name: "WILLRISE UNLIMITED",
    colors: { midnight:"#010b19", navy:"#021631", signal:"#042c62", alloy:"#c0c0c0" }
  },
  hero: {
    title: "Personal equipment for persons with dangerous jobs.",
    subtitle: "A patent-pending Kinetic Fall-Arrest System that redistributes load, preserves circulation, and extends survivable suspension time.",
    badges: ["Patent Pending","ANSI/OSHA compatible"],
    ctas: [
      {label:"License the Technology", href:"/licensing"},
      {label:"Watch Demo", href:"/videos"}
    ]
  },
  videos: [
    { title: "Demo 1", url:"https://www.youtube.com/embed/bwRE7VKn6Qs" },
    { title: "Demo 2", url:"https://www.youtube.com/embed/3xIDJMKQM6U" }
  ],
  verticals: {
    military: { title:"Mission-ready kinetic restraint", cta:"Request Mil Dossier" },
    construction: { title:"Fall protection engineered for real-world suspension", cta:"Pilot Program Inquiry" },
    pleasure: { title:"Designed for pleasure, engineered for safety", cta:"Explore Co-Brand Licensing" }
  }
} as const;
