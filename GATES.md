# Gates: history-of-brain full content draft — H00 start

Scope: Work through the master outline section by section, starting at H00,
researching each topic, writing up each sub-section (research -> write ->
references with links), per Matthew's direction: "do each section, a through
whatever."

- [x] G1: PLAN.md exists with contract, tree, and one gates file per leaf
  CHECK: test -f PLAN.md && test -d gates
  EXPECT: (no output)
  EVIDENCE: PLAN.md + gates/leaf-h00.md

- [x] G2: Every leaf gates file exists, is non-empty, and has >= 3 gates
  CHECK: ls gates/leaf-*.md | wc -l
  EXPECT: /^[0-9]+$/
  EVIDENCE: 1

- [x] G3: Every gate id appears exactly once across all files (no dupes)
  CHECK: grep -h '^- \[ \]' gates/leaf-*.md | sort | uniq -d | wc -l
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G4: First leaf (H00) fully checked with evidence before any later leaf starts
  CHECK: node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-h00.md
  EXPECT: ALL MET
  EVIDENCE: gates/leaf-h00.md: 9 gates | ALL MET (9 met)

- [x] G5: H00 draft file exists at content/start-here/H00.md with research, draft, references
  CHECK: test -f content/start-here/H00.md
  EXPECT: (no output)
  EVIDENCE: content/start-here/H00.md

- [x] G6: H00 draft has >= 5 references with URLs and >= 1 primary source
  CHECK: awk '/^## References/,0' content/start-here/H00.md | grep -c '^- \[.*http'
  EXPECT: /^[5-9]$/
  EVIDENCE: 7

- [x] G7: All dispatched leaf gates fully checked (re-run gate-check on every leaf file)
  CHECK: node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-*.md 2>&1 | tail -1
  EXPECT: ALL MET
  EVIDENCE: ALL MET (9 met)

- [x] G8: No PHI anywhere in drafted content (grep for obvious PHI markers)
  CHECK: grep -rilE 'patient id|case (no|number)|mrn|diagnosis' content/ 2>/dev/null | wc -l
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G9: PLAN.md status log shows every leaf started and verified
  CHECK: grep -c 'leaf .* (started\|verified\|abandoned)' PLAN.md
  EXPECT: /^[0-9]+$/
  EVIDENCE: 3

- [x] G10: Every abandoned gate is listed with reason in final report
  CHECK: grep -c '^ABANDON:' gates/leaf-*.md
  EXPECT: /^[0-9]+$/
  EVIDENCE: 0

<!--
Rules (full spec in unlazy references/gates.md):
- One box per outcome. Boxes are flipped by gate-check.mjs when CHECK output
  matches EXPECT, or by hand for manual gates.
- A checked box with EVIDENCE still reading "pending" counts as UNMET.
- Evidence is the deciding lines only, never a full log.
- If a gate becomes impossible, do not delete it. Add a line:
    ABANDON: G<n> <reason>
  and report it. Visible surrender is honest; silent scope-narrowing is not.
-->
