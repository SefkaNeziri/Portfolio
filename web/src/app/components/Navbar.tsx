import Link from "next/link";

// Navigacioni meni.
// Linkovi vode do sekcija na istoj stranici.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7D8D3] bg-[#F8F3F1]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo / inicijali */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-[#7B5E57]"
        >
          SN.
        </Link>

        {/* Desktop navigacija */}
        <div className="hidden items-center gap-8 text-sm font-medium text-[#6B5B57] md:flex">
          <Link href="#about" className="transition hover:text-[#B68F8A]">
            About
          </Link>
          <Link href="#skills" className="transition hover:text-[#B68F8A]">
            Skills
          </Link>
          <Link href="#experience" className="transition hover:text-[#B68F8A]">
            Experience
          </Link>
          <Link href="#projects" className="transition hover:text-[#B68F8A]">
            Projects
          </Link>
          <Link href="#contact" className="transition hover:text-[#B68F8A]">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}