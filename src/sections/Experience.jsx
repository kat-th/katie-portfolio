const experiences = [
  {
    period: "2022 — Present",
    role: "Business Intelligence Engineer",
    company: "Amazon",
    description: (
      <>
        Designed and optimized scalable{" "}
        <strong className="font-semibold text-secondary-foreground">
          AWS data pipelines
        </strong>{" "}
        using Glue, Lambda, S3, Athena, Redshift, and Step Functions, processing
        millions of operational records across 300+ sites. Improved large-scale
        query performance through partitioning, pre-aggregation, and
        materialized views, reducing dashboard latency from hours to minutes.
        Built automated ingestion and transformation frameworks that
        standardized data across 30+ sites and powered 40+ production
        dashboards.
      </>
    ),
    technologies: [
      "Python",
      "SQL",
      "AWS Glue",
      "AWS Lambda",
      "Amazon S3",
      "Athena",
      "Redshift",
      "Step Functions",
    ],
    current: true,
  },
  {
    period: "2021 — 2022",
    role: "Data Analyst",
    company: "Flexshopper",
    description:
      "Developed automated reporting pipelines and predictive models to drive customer segmentation, lifecycle strategy, and marketing optimization.",
    technologies: [
      "Python",
      "SQL",
      "Google Big Query",
      "Google Cloud Platform",
      "API",
      "Predictive Modeling",
    ],
    current: false,
  },
  {
    period: "2019 — 2019",
    role: "Data Science",
    company: "Viacom (Practicum)",
    description:
      "Analyzed ~4M rows of Facebook advertising data and built predictive models to evaluate demographic targeting strategies and improve advertising profitability for ViacomCBS.",
    technologies: ["R", "SQL", "Statistical Modeling", "Tableau"],
    current: false,
  },
  {
    period: "2016 — 2018",
    role: "Data Analyst",
    company: "Trung Nguyen Franchising",
    description:
      "Analyzed retail and operational performance data to identify sales and inventory optimization opportunities, supporting leadership decision-making.",
    technologies: ["Excel", "MySQL", "Data Analysis"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container max-w-8xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-lg
           font-bold tracking-wider uppercase animate-fade-in"
          >
            Experience
          </span>

          {/* <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p> */}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p
                      className={`text-sm text-muted-foreground mt-4 leading-relaxed ${
                        idx % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
