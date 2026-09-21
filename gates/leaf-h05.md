# Leaf gates: H05 — Then and Now Are Different Questions

Scope: Write the H05 content page (content/start-here/H05.md): separate
historical explanation from current efficacy and safety. Answered via the
evidence model's current_evidence_note + historical-diagnosis + current-science
protocols, NOT via anachronistic projection. Reader question: "Does old mean
effective—or wrong?" Must not repeat H03's evidence-ladder content.

- [x] G1: Draft file exists at content/start-here/H05.md
  CHECK: test -f content/start-here/H05.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/start-here/H05.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H05.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: 8

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/start-here/H05.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: 580

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/start-here/H05.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: 7

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/start-here/H05.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: 1

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/start-here/H05.md
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G8: Draft links to backbone spine and H02/H03 terminology bridges (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|leaf-h02|H02|leaf-h03|H03' content/start-here/H05.md
  EXPECT: /^[3-9]$/
  EVIDENCE: 7

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/start-here/H05.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: 0
