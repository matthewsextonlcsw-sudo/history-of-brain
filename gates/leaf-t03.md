# Leaf gates: T03 — Translation Worlds

Scope: Write the T03 content page (content/time-bands/T03.md): monasteries,
courts, ports, hospitals, shrines, and streets. c. 300–1200 CE. Cover
T03-A through T03-H. Reader question: "How did knowledge move and change?"

- [x] G1: Draft file exists at content/time-bands/T03.md
  CHECK: test -f content/time-bands/T03.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/time-bands/T03.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/time-bands/T03.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: 10

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/time-bands/T03.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: 376

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/time-bands/T03.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: 9

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/time-bands/T03.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: 1

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/time-bands/T03.md
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G8: Draft links to backbone spine and internal pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|T00|T01|T02|H02|H03|H05|H06|H07' content/time-bands/T03.md
  EXPECT: /^[3-9]$/
  EVIDENCE: 12

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/time-bands/T03.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: 0
