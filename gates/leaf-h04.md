# Leaf gates: H04 — Whose Voice Survives in the Archive?

Scope: Write the H04 content page (content/start-here/H04.md): direct voice,
reported speech, institutional naming, silence, translation, and power.
Answered via mediation chains, NOT via diagnosis. Must not repeat H03's
evidence-ladder content. Opens with the lived-experience rule: "No direct
voice survives. Say so prominently." Reader question: "Are these really
patient stories?"

- [x] G1: Draft file exists at content/start-here/H04.md
  CHECK: test -f content/start-here/H04.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/start-here/H04.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H04.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: 10

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/start-here/H04.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: 0

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/start-here/H04.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: 6

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/start-here/H04.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: 2

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/start-here/H04.md
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G8: Draft links to backbone spine and H02/H03 terminology bridges (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|leaf-h02|H02|leaf-h03|H03' content/start-here/H04.md
  EXPECT: /^[3-9]$/
  EVIDENCE: (link count)

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H04.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: 0
