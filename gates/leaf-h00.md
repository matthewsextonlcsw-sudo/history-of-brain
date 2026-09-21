# Leaf gates: H00 — The Human Mind Through Time (landing page + map)

Scope: Write the H00 content page (content/start-here/H00.md): a landing
page that orients the reader, presents the four doors (time, question,
experience, place), and links forward to the rest of the outline.

- [x] G1: Draft file exists at content/start-here/H00.md
  CHECK: test -f content/start-here/H00.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/start-here/H00.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H00.md | grep -c '^- \['
  EXPECT: /^7$/
  EVIDENCE: 7

- [x] G4: Draft section is 300-900 words of landing-page prose
  CHECK: awk '/^## Draft/,/^## References/' content/start-here/H00.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: 386

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/start-here/H00.md | grep -c '^- \['
  EXPECT: /^7$/
  EVIDENCE: 7

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/start-here/H00.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: 1

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/start-here/H00.md
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G8: Draft links to H01, H03, and the time-band spine (internal links)
  CHECK: grep -cE 'H01|H03|CHRONOLOGICAL-BACKBONE' content/start-here/H00.md
  EXPECT: /^[5-9]$/
  EVIDENCE: 5

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H00.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: 0
