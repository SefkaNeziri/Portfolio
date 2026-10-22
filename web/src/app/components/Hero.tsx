import Link from "next/link";

// Tipovi za Hero komponentu.
// Prosleđujemo ime, glavnu titulu i dodatni podnaslov.
type HeroProps = {
  name: string;
  title: string;
  subtitle: string;
};

// Hero sekcija je prvi i najvažniji deo stranice.
export default function Hero({ name, title, subtitle }: HeroProps) {
  return (
    <section className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12">
      {/* Levi blok sa tekstom */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B68F8A]">
          Warm. Thoughtful. Creative.
        </p>

        <h1 className="text-5xl font-bold leading-tight text-[#4E403D] md:text-7xl">
          Hi, I&apos;m {name}.
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-[#7B5E57] md:text-3xl">
          {title}
        </h2>

        <p className="mt-3 text-lg text-[#8A756F]">{subtitle}</p>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#6B5B57]">
          I build thoughtful, user-friendly software and enjoy turning ideas
          into practical digital solutions. I’m especially interested in
          full-stack development, where I can combine logic, structure, and
          design to create meaningful experiences.
        </p>

        {/* Dugmad */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-[#B68F8A] px-8 py-4 font-medium text-white transition hover:bg-[#A07B76]"
          >
            View Projects
          </Link>

          <a
            href="/_CV.pdf"
            download
            className="rounded-full border border-[#C9AAA4] bg-[#FFF9F7] px-8 py-4 font-medium text-[#7B5E57] transition hover:bg-[#F3E5E0]"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Desni blok - prostor za budući 3D avatar */}
      {/* Prostor za budući 3D avatar sa nežnom pozadinom. */}
      <div className="flex min-h-105 items-center justify-center rounded-[40px] border border-[#E7D8D3] bg-linear-to-br from-[#F7EEEB] via-[#F4E7E2] to-[#EAD7D1] p-8 shadow-[0_20px_60px_rgba(182,143,138,0.12)]">        <div className="max-w-sm text-center">
          {/* Ovo je privremeni placeholder dok ne napravimo pravi avatar. */}
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#F8F3F1] text-5xl shadow-md">
            🧕🏻
          </div>

          <h3 className="mt-8 text-2xl font-semibold text-[#5C4B47]">
            3D Avatar Coming Soon
          </h3>

          <p className="mt-4 leading-7 text-[#7B6762]">
            A stylized 3D avatar inspired by me will be placed here — with
            hijab, a modest elegant dress, and a warm, welcoming visual style
            that matches the rest of the portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}