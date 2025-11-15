import React, { useState, useMemo, useEffect } from "react";
import { Menu, X, Mail, Linkedin, GraduationCap, FileText, Home as HomeIcon, ExternalLink, ArrowRight } from "lucide-react";

const navItems = [
  { key: "home", label: "Home", icon: HomeIcon },
  { key: "research", label: "Research & Publications", icon: FileText },
  { key: "teaching", label: "Teaching", icon: GraduationCap },
];

function classNames(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-300 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm",
        "hover:shadow-md transition-shadow",
        className
      )}
    >
      {children}
    </div>
  );
}

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon: Icon,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";
  const styles: Record<string, string> = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-300 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 dark:focus:ring-neutral-700",
    ghost:
      "bg-transparent text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800",
    outline:
      "border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800",
  };

  const content = (
    <span>{Icon && <Icon className="h-4 w-4" />} {children}</span>
  );

  if (href) {
    return (
      <a href={href} className={classNames(base, styles[variant], className)} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames(base, styles[variant], className)}>
      {content}
    </button>
  );
}

function Header({ current, setCurrent }: { current: string; setCurrent: (key: string) => void; }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img
  src="/headshot.jpg"            // or your external URL
  alt="Soroush Verdi"
  className="h-9 w-9 rounded-xl object-cover border border-neutral-200 dark:border-neutral-700"
/>

            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Soroush Verdi</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">PhD Candidate in Marketing</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCurrent(key)}
                className={classNames(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  current === key
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                )}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {/* mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => {
                    setCurrent(key);
                    setOpen(false);
                  }}
                  className={classNames(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium",
                    current === key
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-12">
          <div className="order-1">
            <div className="mb-3 flex flex-wrap gap-2">
              <Pill>Consumer Behavior</Pill>
              <Pill>Judgment & Decision-Making</Pill>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Soroush Verdi
            </h1>
            <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">PhD Candidate in Marketing, University of Groningen</p>
            <p className="mt-5 max-w-2xl leading-7 text-neutral-700 dark:text-neutral-300">
              I am a PhD Candidate in Marketing at the University of Groningen. My work lies at the intersection of behavioral science and judgment and decision-making. I’m particularly interested in how people think about value, how they interpret prices, justify spending, respond to incentives, and make sense of what feels fair or worthwhile. I study the psychological biases and mental shortcuts that guide these decisions and explore why people sometimes make choices that seem inconsistent or even irrational on the surface.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-white uppercase">Research Areas</h3>
              <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>
                  <span className="font-medium text-neutral-900 dark:text-white">Value Perception</span> — Price Evaluation, Mental Accounting, Fairness and Worth Judgments.
                </li>
                <li>
                  <span className="font-medium text-neutral-900 dark:text-white">Judgment & Decision-Making</span> — Trade-off Evaluation, Incentive Response, Donation and Prosocial Decisions.
                </li>
                <li>
                  <span className="font-medium text-neutral-900 dark:text-white">Psychology of AI</span> — AI Influence on People's Decisions, Biases Caused by AI.
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="mailto:s.verdi@rug.nl" icon={Mail}>Email</Button>
              <Button href="https://www.linkedin.com/in/soroushverdi/" icon={Linkedin} variant="outline">LinkedIn</Button>
            </div>
          </div>
          <div className="order-2 md:order-2 flex md:justify-end">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900" />
              <img
                className="relative z-10 h-full w-full rounded-3xl object-cover object-center border border-neutral-200 dark:border-neutral-800"
                src="/headshot.jpg"
                alt="Headshot"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HomePage() {
  return (
    <main id="main">
      <Hero />
    </main>
  );
}

function ResearchPage() {
  return (
    <main id="research">
      <section className="py-10 md:py-14">
        <Container>
          <div className="mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">Research & Publications</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-3xl"></p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 shadow-sm">
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Overview of research</h2>
                <div className="mt-4 md:mt-5 text-neutral-700 dark:text-neutral-300 leading-7 text-base md:text-base">
                  <p>
                    In my <strong>first PhD research project</strong>, I looked at what happens to <strong>people's donations</strong> when charities <em>create their donation appeals using Generative AI tools and disclose that they have used them!</em> We examined this in the climate change domain to see, first, how people perceive the severity and risk of climate-related threats when the appeals are AI-generated, and second, whether, and how, their donations change as a consequence.
                  </p>
                  <p className="mt-4">
                    In my <strong>second and third PhD research projects</strong>, I study <em>people's cognitive biases</em> in using Generative AI tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 shadow-sm">
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Working Papers / Publications</h2>
                <div className="mt-6 space-y-6">
                  <article>
                    <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white">
                      AI Disclosure in Environmental Donation Appeals
                    </h3>
                    <p className="mt-1 text-neutral-700 dark:text-neutral-300">
                      <span className="font-semibold">Verdi, S.</span>, Moeini-Jazani, M., &amp; Schwarz, N. — <em>Submitted, 2025</em> •{' '}
                      <a href="mailto:s.verdi@rug.nl" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500">Email for the draft</a>
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function TeachingPage() {
  return (
    <main>
      <section className="py-10 md:py-14">
        <Container>
          <div className="mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">Teaching</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-3xl">
              Courses I currently teach/supervise and a record of past teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 shadow-sm">
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Current Courses</h2>
                <ul className="mt-6 space-y-0">
                  <li className="py-4 text-base md:text-lg font-semibold text-neutral-900 dark:text-white border-b border-dashed border-neutral-200/70 dark:border-neutral-700/70">
                    Building Brands for Impact – University of Groningen (MSc Marketing Management)
                  </li>
                  <li className="py-4 text-base md:text-lg font-semibold text-neutral-900 dark:text-white border-b border-dashed border-neutral-200/70 dark:border-neutral-700/70">
                    Marketing for E&BE – University of Groningen (BSc Economics and Business Economics)
                  </li>
                  <li className="py-4 text-base md:text-lg font-semibold text-neutral-900 dark:text-white">
                    Thesis Supervision (MSc and BSc students)
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 shadow-sm">
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Past Courses</h2>
                <ul className="mt-6">
                  <li className="py-2 text-base md:text-lg font-semibold text-neutral-900 dark:text-white">
                    Research Methodology for IB (BSc International Business, 2024)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div>© {new Date().getFullYear()} Soroush Verdi • PhD Candidate in Marketing</div>
          <div className="flex flex-wrap items-center gap-3">
            <a className="hover:underline" href="mailto:s.verdi@rug.nl">Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function MarketingPhDWebsite() {
  const [current, setCurrent] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  useEffect(() => {
    console.assert(navItems.map(n => n.key).join(',') === 'home,research,teaching', 'Expected nav keys to be home,research,teaching');
    console.assert(classNames('a', 'b') === 'a b', 'classNames should join non-falsy strings with a space');
    const header = document.querySelector('header');
    console.assert(!!header, 'Header should render');
  }, []);

  const Page = useMemo(() => {
    switch (current) {
      case "research":
        return <ResearchPage />;
      case "teaching":
        return <TeachingPage />;
      default:
        return <HomePage />;
    }
  }, [current]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Header current={current} setCurrent={setCurrent} />
      {Page}
      <Footer />
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
    </div>
  );
}
