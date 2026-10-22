// Ovde grupišemo veštine po oblastima.
const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "C#", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Responsive Design", "React"],
  },
  {
    title: "Backend & Architecture",
    skills: ["OOP", "SOLID", "Design Patterns", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL", "MySQL", "Entity Framework Core"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Agile", "Scrum"],
  },
  {
    title: "Additional Exposure",
    skills: ["RabbitMQ", "SignalR", "WCF", "Sockets"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F4EAE6] px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B68F8A]">
          Skills & Technologies
        </p>

        <h2 className="text-4xl font-bold text-[#4E403D] md:text-5xl">
          What I work with
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B5B57]">
          Here are the technologies, tools, and development concepts I’ve
          worked with through university projects, teaching experience, and
          ongoing learning.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[28px] border border-[#E7D8D3] bg-[#FFF9F7] p-6 shadow-[0_10px_30px_rgba(182,143,138,0.08)]"
            >
              <h3 className="text-xl font-semibold text-[#5C4B47]">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F3E3DE] px-4 py-2 text-sm font-medium text-[#7B5E57]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}