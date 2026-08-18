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
                I’m a Data Engineer with 6+ years of experience building
                scalable data pipelines, cloud data platforms, and automation
                solutions that power analytics and business-critical
                decision-making.
              </p>
              <p>
                My work spans{" "}
                <strong className="font-semibold text-secondary-foreground">
                  data ingestion, transformation, modeling, orchestration, and
                  optimization
                </strong>
                , with hands-on experience across{" "}
                <strong className="font-semibold text-secondary-foreground">
                  Databricks, AWS, Python, SQL, and Delta Lake
                </strong>
                . I’ve built pipelines processing 90M+ records, optimized
                large-scale cloud workloads, and developed data systems
                supporting 300+ operational sites.
              </p>
              <p>
                My background in analytics gives me a strong understanding of
                how data is consumed downstream, helping me build infrastructure
                that is not only scalable and reliable, but also practical for
                real-world analytics.
              </p>
            </div>
          </div>

          {/* Right Column - Technologies */}
          <div className="space-y-8 animate-fade-in animation-delay-300">
            <div>
              {/* <p className="mb-6 text-secondary-foreground">
                Technologies I Work With
              </p> */}
              <p className="text-muted-foreground mb-8">
                Technologies / Frameworks I work with
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
