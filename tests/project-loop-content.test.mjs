import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const projectLoopPage = new URL(
  "../src/components/ProjectLoopPage/index.tsx",
  import.meta.url
);
const app = new URL("../src/App.tsx", import.meta.url);

test("project-loop overview names the two selected pilots and their tracking status", () => {
  assert.equal(existsSync(projectLoopPage), true);

  const page = readFileSync(projectLoopPage, "utf8");
  assert.match(page, /GitFitCode hub/);
  assert.match(page, /UpAhead MVP/);
  assert.match(page, /selected pilot for project tracking/i);
  assert.match(page, /under implementation and validation/i);
  assert.doesNotMatch(page, /planned MVP/i);
  assert.doesNotMatch(page, /planned GitFitCode hub/i);
  assert.match(page, /invite-only/i);
});

test("project-loop animation respects reduced motion", () => {
  const page = readFileSync(projectLoopPage, "utf8");
  assert.match(page, /useReducedMotion/);
  assert.match(page, /reducedMotion/);
});

test("project-loop overview describes the goal-first setup loop", () => {
  const page = readFileSync(projectLoopPage, "utf8");
  assert.match(page, /project name and a required goal/i);
  assert.match(page, /optionally add sources or services/i);
  assert.match(page, /title, purpose, and expected content/i);
  assert.match(page, /review the saved brief/i);
  assert.match(page, /AI-assisted drafts and routing/i);
  assert.match(page, /human review/i);
  assert.match(page, /saved URL is a reference, not an\s+authenticated connection/i);
  assert.match(page, /not yet\s+deployed/i);
  assert.match(page, /next action/i);
  assert.match(page, /project history/i);
});

test("the site routes the marked pilot overview internally", () => {
  assert.match(readFileSync(app, "utf8"), /path="\/project-loop"/);
});
