# Leaf gates: H01 — The two-minute global history of mental health

Scope: Write the H01 content page (content/start-here/H01.md): a compact
route across all 11 time bands (B0–B10), answering "What is the big story?"
It links out to the chronological backbone and to the deep leaf pages rather
than pretending to be complete.

- [x] G1: Draft file exists at content/start-here/H01.md
  CHECK: test -f content/start-here/H01.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/start-here/H01.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H01.md | grep -c '^- \['
  EXPECT: /^7$/
  EVIDENCE: 7

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/start-here/H01.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: (word count)

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/start-here/H01.md | grep -c '^- \['
  EXPECT: /^7$/
  EVIDENCE: 7

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/start-here/H01.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: 1

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/start-here/H01.md
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G8: Draft links to the backbone spine and deep pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|\]\(#T[0-9]' content/start-here/H01.md
  EXPECT: /^[3-9]$/
  EVIDENCE: (link count)

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H01.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: 0