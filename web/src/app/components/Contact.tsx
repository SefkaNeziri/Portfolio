import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-20 md:px-12"
    >
      <div className="rounded-[36px] border border-[#E7D8D3] bg-[#FFF9F7] p-10 shadow-[0_12px_35px_rgba(182,143,138,0.10)] md:p-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B68F8A]">
          Contact
        </p>

        <h2 className="text-4xl font-bold text-[#4E403D] md:text-5xl">
          Let’s connect
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B5B57]">
          I’m currently open to Junior Full-Stack Developer opportunities,
          internships, and meaningful collaborations where I can continue
          learning and contribute to real development work.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6B5B57]">
          If you’d like to connect, discuss an opportunity, or learn more about
          my background, I’d be happy to hear from you.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            href="mailto:sefka.neziri@hotmail.com"
            className="rounded-2xl border border-[#E7D8D3] bg-[#F8F3F1] p-5 transition hover:bg-[#F3E5E0]"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#B68F8A]">
              Email
            </p>
            <p className="mt-2 text-lg font-medium text-[#5C4B47]">
              sefka.neziri@hotmail.com
            </p>
          </a>

          <a
            href="tel:+4553270762"
            className="rounded-2xl border border-[#E7D8D3] bg-[#F8F3F1] p-5 transition hover:bg-[#F3E5E0]"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#B68F8A]">
              Phone
            </p>
            <p className="mt-2 text-lg font-medium text-[#5C4B47]">
              +45 53 27 07 62
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/sefka-neziri-0b2041250/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-[#E7D8D3] bg-[#F8F3F1] p-5 transition hover:bg-[#F3E5E0]"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#B68F8A]">
              LinkedIn
            </p>
            <p className="mt-2 text-lg font-medium text-[#5C4B47]">
              View Profile
            </p>
          </a>

          {/* GitHub link trenutno možeš ostaviti kao placeholder dok ne odlučiš koji profil koristiš. */}
          <a
            href="https://github.com/SefkaNeziri"
            className="rounded-2xl border border-[#E7D8D3] bg-[#F8F3F1] p-5 transition hover:bg-[#F3E5E0]"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#B68F8A]">
              GitHub
            </p>
            <p className="mt-2 text-lg font-medium text-[#5C4B47]">
              Check out my repositories
            </p>
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-[#8A756F] underline-offset-4 hover:text-[#B68F8A] hover:underline"
          >
            Back to top
          </Link>
        </div>
      </div>
    </section>
  );
}