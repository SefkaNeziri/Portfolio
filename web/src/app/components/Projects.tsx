export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F4EAE6] px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B68F8A]">
          Projects
        </p>

        <h2 className="text-4xl font-bold text-[#4E403D] md:text-5xl">
          What I’m building
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6B5B57]">
          I’m currently rebuilding my portfolio projects from the ground up.
          This section will continue to grow as I develop new applications that
          reflect my skills in full-stack development, problem solving, and
          software design.
        </p>

        <div className="mt-12 rounded-[30px] border border-[#E7D8D3] bg-[#FFF9F7] p-10 text-center shadow-[0_10px_30px_rgba(182,143,138,0.08)]">
          <h3 className="text-2xl font-semibold text-[#5C4B47]">
            New projects are currently in development
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6B5B57]">
            I’m actively building fresh work for this portfolio. Soon, this
            section will include project cards with descriptions, technologies,
            GitHub links, and key development insights.
          </p>
        </div>
      </div>
    </section>
  );
}