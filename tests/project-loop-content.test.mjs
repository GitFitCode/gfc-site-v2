import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const projectLoopPage = new URL(
  "../src/components/ProjectLoopPage/index.tsx",
  import.meta.url
);
const app = new URL("../src/App.tsx", import.meta.url);

test("project-loop overview names the two pilots and their honest status", () => {
  assert.equal(existsSync(projectLoopPage), true);

  const page = readFileSync(projectLoopPage, "utf8");
  assert.match(page, /GitFitCode hub/);
  assert.match(page, /UpAhead MVP/);
  assert.match(page, /planned and under validation/i);
  assert.match(page, /invite-only/i);
});

test("project-loop overview describes the reviewable learning loop", () => {
  const page = readFileSync(projectLoopPage, "utf8");
  assert.match(page, /question, learning goal, or problem/i);
  assert.match(page, /permitted project evidence/i);
  assert.match(page, /reviewable update/i);
  assert.match(page, /peer help/i);
  assert.match(page, /next action/i);
  assert.match(page, /project history/i);
});

test("the site routes the marked pilot overview internally", () => {
  assert.match(readFileSync(app, "utf8"), /path="\/project-loop"/);
});
