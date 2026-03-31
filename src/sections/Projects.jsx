import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Ecomm Analytics Dashboard",
    description:
      "E-commerce sales dashboard tracking item-level performance, revenue trends, and inventory insights across product categories.",
    embedUrl:
      "https://lookerstudio.google.com/embed/reporting/5bc07062-f86a-41ed-b6c6-0990abf39cad/page/U8csF",
    tags: ["Looker", "SQL", "Data Analytics"],
    link: "https://lookerstudio.google.com/s/hd1e1aUzbzw",
    github: "#",
  },
  {
    title: "Google Analytics Dashboard",
    description:
      "Google Analytics dashboard visualizing traffic sources, user behavior, conversion funnels, and campaign performance metrics.",
    embedUrl:
      "https://lookerstudio.google.com/embed/reporting/7ee383af-18a2-4f22-bb0f-708871a704ef/page/CcFRC",
    tags: ["Google Analytics", "Looker Studio", "Data Visualization"],
    link: "https://lookerstudio.google.com/s/lPcPs5sntJE",
    github: "#",
  },
  {
    title: "Cash Flow - Real Estate Investment Analyzer",
    description:
      "Full-stack web app for evaluating real estate listings with key financial metrics like cash-on-cash return, monthly cash flow, and AI-powered investment recommendations based on user inputs.",
    embedUrl: "https://cashflowapp-aubf.onrender.com/",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    link: "https://cashflowapp-aubf.onrender.com/",
    github: "https://github.com/kat-th/cashflow-app?tab=readme-ov-file",
  },
  {
    title: "A/B Testing - Cookie Cats Mobile Game",
    description:
      "Statistical A/B test analysis on Cookie Cats mobile game data, evaluating the impact of gate placement on player retention using hypothesis testing.",
    embedUrl:
      "https://nbviewer.org/github/katiethaoha/AB-testing-with-cookie-cats-mobile-game/blob/master/AB-testing-notebook.ipynb",
    tags: ["Python", "A/B Testing", "Statistics", "Jupyter"],
    link: "https://nbviewer.org/github/katiethaoha/AB-testing-with-cookie-cats-mobile-game/blob/master/AB-testing-notebook.ipynb",
    github:
      "https://github.com/katiethaoha/AB-testing-with-cookie-cats-mobile-game",
  },
  {
    title: "Profitable App Profiles",
    description:
      "Data analysis identifying what types of free mobile apps attract the most users on the App Store and Google Play, analyzing 10,000+ Android and 7,000+ iOS apps.",
    embedUrl:
      "https://nbviewer.org/github/kat-th/profitable_app_profiles/blob/main/Profitable%20App%20Profiles%20for%20the%20App%20Store%20and%20Google%20Play%20Markets.ipynb",
    tags: ["Python", "Data Analysis", "Jupyter"],
    link: "https://nbviewer.org/github/kat-th/profitable_app_profiles/blob/main/Profitable%20App%20Profiles%20for%20the%20App%20Store%20and%20Google%20Play%20Markets.ipynb",
    github: "https://github.com/kat-th/profitable_app_profiles",
  },
  {
    title: "Prosper Loan EDA",
    description:
      "Exploratory data analysis of 113,937 Prosper peer-to-peer loan records across 81 variables, uncovering patterns in borrower behavior, credit risk, and loan performance.",
    embedUrl:
      "https://nbviewer.org/github/katiethaoha/Rstudio-ProsperLoan-EDA/blob/master/prosperloan.html",
    tags: ["R", "EDA", "Statistics", "Data Visualization"],
    link: "https://nbviewer.org/github/katiethaoha/Rstudio-ProsperLoan-EDA/blob/master/prosperloan.html",
    github: "https://github.com/katiethaoha/Rstudio-ProsperLoan-EDA",
  },
  // {
  //   title: "Boston Crime Incident Report",
  //   description:
  //     "Python-based analysis of Boston crime incident data exploring patterns in crime types, locations, time of day, and seasonal trends across city districts.",
  //   embedUrl:
  //     "https://nbviewer.org/github/katiethaoha/crime-indicent-report-with-python/blob/master/Crime-incident-report.ipynb",
  //   tags: ["Python", "Pandas", "Data Analysis", "Jupyter"],
  //   link: "https://nbviewer.org/github/katiethaoha/crime-indicent-report-with-python/blob/master/Crime-incident-report.ipynb",
  //   github: "https://github.com/katiethaoha/crime-indicent-report-with-python",
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          {/* <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2> */}
          {/* <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image or Embed */}
              <div className="relative overflow-hidden aspect-video">
                {project.embedUrl ? (
                  <>
                    <iframe
                      src={project.embedUrl}
                      className="w-full h-full border-0"
                      allowFullScreen
                      title={project.title}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
