# Leaf gates: V02 — A Person's Words Inside Someone Else's Record

Scope: Write the V02 content page (content/lived-experience/V02.md): show
exactly when a healer, clerk, judge, relative, or translator controls the
quotation. Reader question: "Who held the pen?" Must trace the frame, not
pretend the voice was raw.

- [x] G1: Draft file exists at content/lived-experience/V02.md
  CHECK: test -f content/lived-experience/V02.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/lived-experience/V02.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/lived-experience/V02.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: 8

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/lived-experience/V02.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: 453

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/lived-experience/V02.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: 9

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/lived-experience/V02.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: 1

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/lived-experience/V02.md
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G8: Draft links to backbone spine and H03/H04/V01 internal pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|H03|H04|V01' content/lived-experience/V02.md
  EXPECT: /^[3-9]$/
  EVIDENCE: 7

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/lived-experience/V02.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: 0
