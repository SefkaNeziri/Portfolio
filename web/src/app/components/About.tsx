// About sekcija daje prirodan uvod o tebi.
export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-20 md:px-12"
    >
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B68F8A]">
          About Me
        </p>

        <h2 className="text-4xl font-bold text-[#4E403D] md:text-5xl">
          A little about me
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-[#6B5B57]">
          <p>
            I’m a Software Technology Engineering student at VIA University
            College with a strong interest in full-stack development and a
            genuine curiosity about how software works from end to end.
          </p>

          <p>
            What I enjoy most about development is turning an idea into
            something real — understanding the problem, planning a solution,
            building it step by step, and improving it along the way.
          </p>

          <p>
            Through my studies, I’ve worked with object-oriented programming,
            web development, databases, system design, and Agile teamwork. I
            also volunteer as a Web Development Instructor at ReDI School,
            where I help learners understand JavaScript, HTML, and CSS through
            practical exercises.
          </p>

          <p>
            I’m currently looking for opportunities as a Junior Full-Stack
            Developer where I can contribute, continue learning, and grow
            through real-world development experience.
          </p>
        </div>
      </div>
    </section>
  );
}