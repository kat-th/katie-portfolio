// Content configuration for different versions
const contentVersions = {
  version_ae: {
    name: "Katie Ha",
    title: "Data & Analytics Engineer",
    intro:
      "I’m a data professional with 6+ years of experience building and optimizing data workflows, automation tools, and ML models that support operational decision-making at scale.",
    email: "katie.ha98@gmail.com",
    github: "https://github.com/kat-th",
    linkedin: "https://www.linkedin.com/in/katieha/",
    about1:
      "I’m a data professional with 6+ years of experience building scalable data systems that power analytics and operational decision-making. My work sits at the intersection of data engineering and analytics engineering — designing reliable pipelines, modeling clean transformation layers, and automating workflows that turn raw data into trusted, actionable insights.",
    about2:
      "I’ve led end-to-end initiatives including network-wide risk forecasting frameworks, site-level performance attribution models, and automation tools that eliminated manual reporting across 300+ robotic fulfillment centers. Across these projects, I focus on building durable data foundations — from optimized ETL pipelines and partitioned datasets to standardized metric definitions and semantic layers that enable consistent, self-serve analytics.",
    about3:
      "I’m motivated by building robust engineering systems that transform raw data into scalable, production-ready analytics infrastructure.",
    experience1:
      "Optimized AWS ETL workflows and Athena workloads supporting 40+ dashboards, reducing latency and improving reliability. Developed production risk and attribution models used across 300 AR buildings for network-level decision-making. Automated reporting processes to scale analytics across the AR network.",
  },
  version_ds: {
    name: "Katie Ha",
    title: "Data Scientist",
    intro:
      "I’m a Data Scientist with 6+ years of experience applying statistical modeling, machine learning, and large-scale data analysis to drive operational and strategic decision-making. I build end-to-end solutions that move from raw data to predictive insight, combining analytical rigor with scalable engineering practices.",
    email: "katie.ha98@gmail.com",
    github: "https://github.com/kat-th",
    linkedin: "https://www.linkedin.com/in/katieha/",
    about1:
      "I specialize in translating complex, ambiguous business problems into measurable, data-driven solutions. My work spans predictive modeling, attribution analysis, forecasting, and performance optimization across large operational networks. I’ve developed site-level attribution models, risk forecasting frameworks, and ramp performance models that supported 300+ fulfillment centers and multi-million dollar operational initiatives.",
    about2:
      "With a strong foundation in Python, SQL, and AWS-based data systems, I not only build and validate models but also productionize them into automated workflows to ensure insights are reliable, repeatable, and actionable. I’m particularly interested in roles where I can deepen my impact in statistical modeling, experimentation, and scalable machine learning systems that influence real-world decisions.",
    experience1:
      "Led development of predictive attribution and risk models supporting 300+ robotic fulfillment centers, enabling data-driven operational decision-making at scale. Built and automated modeling pipelines in Python and AWS to productionize forecasting and performance insights. Partnered with operations and engineering teams to translate complex system dynamics into actionable metrics and scalable analytics solutions.",
  },
};

// Set which version to use (can be controlled by environment variable)
const currentVersion = import.meta.env.VITE_CONTENT_VERSION || "version_ae";

export const content = contentVersions[currentVersion];
