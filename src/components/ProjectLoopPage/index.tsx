import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";

const loopSteps = [
  "Start with a project name and a required goal.",
  "Optionally add sources or services, with a purpose.",
  "Optionally choose a thread destination from a catalog that can be empty, with a title, purpose, and expected content.",
  "Review the saved brief and confirm what the project is for.",
  "Later, review AI suggestions, ask for help, and choose a next action. This is planned, not running today.",
];

export default function ProjectLoopPage() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.main
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: 16 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-20 md:px-12 md:pt-28"
    >
      <section className="max-w-4xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gfc-accent">
          Research / pilot overview
        </p>
        <h1 className="text-4xl font-bold leading-tight text-neutral-800 md:text-7xl">
          A project loop for learning through shared practice.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-2xl">
          Start with a project name and goal, then save a brief that can guide
          future drafts, help, next actions, and an honest project history.
        </p>
      </section>

      <section aria-labelledby="how-it-works" className="rounded-3xl bg-neutral-100 p-7 md:p-12">
        <h2 id="how-it-works" className="text-3xl font-bold text-neutral-800 md:text-5xl">
          How the loop works
        </h2>
        <ol className="mt-9 grid gap-5 md:grid-cols-2">
          {loopSteps.map((step, index) => (
            <li key={step} className="flex gap-4 rounded-2xl bg-white p-5 text-lg text-neutral-700 shadow-sm">
              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gfc-accent font-bold text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="pilots" className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 p-7 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-gfc-accent">Pilot one</p>
          <h2 id="pilots" className="mt-3 text-3xl font-bold text-neutral-800">GitFitCode hub</h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            A selected pilot for project tracking, with updates, feedback, and
            a more useful portfolio trail. The tracking loop is under
            implementation and validation.
          </p>
        </div>
        <div className="rounded-3xl border border-neutral-200 p-7 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-gfc-accent">Pilot two</p>
          <h2 className="mt-3 text-3xl font-bold text-neutral-800">UpAhead MVP</h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            An existing repository selected as a pilot for project tracking.
            The tracking loop is under implementation and validation.
          </p>
        </div>
      </section>

      <section className="max-w-4xl border-l-4 border-gfc-accent pl-6">
        <h2 className="text-2xl font-bold text-neutral-800">Private-first by design</h2>
        <p className="mt-3 text-lg leading-relaxed text-neutral-600">
          Private-first research is invite-only. Share permitted project
          evidence in reviewable updates. A saved URL is a reference, not an
          authenticated connection; AI routing and live onboarding are not yet
          deployed.
        </p>
      </section>

      <div>
        <Link
          to="/portfolio"
          className="inline-flex rounded-lg bg-gfc-accent px-7 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-gfc-accent/30"
        >
          Explore the portfolio
        </Link>
      </div>
    </motion.main>
  );
}
