export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-20 md:px-12"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B68F8A]">
        Experience & Education
      </p>

      <h2 className="text-4xl font-bold text-[#4E403D] md:text-5xl">
        Learning, building, and growing
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Experience card */}
        <div className="rounded-[30px] border border-[#E7D8D3] bg-[#FFF9F7] p-8 shadow-[0_10px_30px_rgba(182,143,138,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68F8A]">
            Experience
          </p>

          <h3 className="mt-4 text-2xl font-semibold text-[#5C4B47]">
            Volunteer Web Development Instructor
          </h3>

          <p className="mt-2 font-medium text-[#8A756F]">
            ReDI School of Digital Integration | April 2026 – Present
          </p>

          <p className="mt-6 leading-8 text-[#6B5B57]">
            I support learners in understanding JavaScript, HTML, and CSS
            through practical exercises and hands-on guidance. This experience
            has strengthened my communication skills, patience, and ability to
            explain technical concepts in a clear and approachable way.
          </p>

          <h3 className="mt-10 text-2xl font-semibold text-[#5C4B47]">
            Academic Software Development Experience
          </h3>

          <p className="mt-2 font-medium text-[#8A756F]">
            VIA University College | 2025 – Present
          </p>

          <p className="mt-6 leading-8 text-[#6B5B57]">
            Through coursework and collaborative projects, I have gained
            hands-on experience in software development, object-oriented design,
            databases, web development, and system modeling. I have also worked
            in Scrum-based team environments, participating in planning,
            stand-ups, and retrospectives.
          </p>
        </div>

        {/* Education card */}
        <div className="rounded-[30px] border border-[#E7D8D3] bg-[#FFF9F7] p-8 shadow-[0_10px_30px_rgba(182,143,138,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68F8A]">
            Education
          </p>

          <h3 className="mt-4 text-2xl font-semibold text-[#5C4B47]">
            Bachelor of Engineering in Software Technology Engineering
          </h3>

          <p className="mt-2 font-medium text-[#8A756F]">
            VIA University College | 2025 – Present
          </p>

          <p className="mt-6 leading-8 text-[#6B5B57]">
            Building a strong academic foundation in software engineering,
            programming, databases, system architecture, and web development.
          </p>

          <h3 className="mt-10 text-2xl font-semibold text-[#5C4B47]">
            JavaScript Development Course
          </h3>

          <p className="mt-2 font-medium text-[#8A756F]">
            ReDI School of Digital Integration | 2023 – 2024
          </p>

          <p className="mt-6 leading-8 text-[#6B5B57]">
            Strengthened my web development fundamentals and gained practical
            experience working with JavaScript and the basics of frontend
            development.
          </p>
        </div>
      </div>
    </section>
  );
}