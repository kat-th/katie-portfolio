import { Code2, Lightbulb, Rocket, Users, ChevronRight } from "lucide-react";

const technologies = [
  "Python",
  "SQL",
  "AWS",
  "GCP",
  "R",
  "Git",
  "CI/CD",
  "Tableau",
  "QuickSight",
  "ETL Pipeline",
  "A/B Testing",
  "Data Modeling",
  "Apache Spark",
  "Docker",
  "TypeScript",
  "React",
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-lg font-bold tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2> */}

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a data professional with 7+ years of experience working with
                scalable data systems that power operational and strategic
                decision-making. With experience spanning ETL design, cloud data
                systems, and predictive modeling, I build end-to-end solutions
                that move from raw data to actionable insight.
              </p>
              <p>
                My work sits at the intersection of engineering and analytics —
                translating ambiguous business problems into reliable,
                production-ready data systems. I’ve built automated migration
                tools for 40+ dashboards, optimized large-scale Athena
                workloads, and developed network-wide risk and attribution
                models supporting 300+ fulfillment centers and multi-million
                dollar operational initiatives.
              </p>
              <p>
                I’m particularly interested in data engineering and analytics
                engineering roles where I can deepen my impact on system design,
                cloud-native architecture, and scalable data infrastructure.
              </p>
            </div>

            {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div> */}
          </div>

          {/* Right Column - Technologies */}
          <div className="space-y-8 animate-fade-in animation-delay-300">
            <div>
              {/* <p className="mb-6 text-secondary-foreground">
                Technologies I Work With
              </p> */}
              <p className="text-muted-foreground mb-8">
                Technologies I work with
              </p>

              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ChevronRight className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
