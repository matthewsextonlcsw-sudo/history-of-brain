# Leaf gates: Q02 — What Counted as Mental Illness Before "Mental Illness"?

Scope: Write the Q02 content page (content/guides/Q02.md): a thematic guide that cuts across time bands. Covers period terms, distress/difference, possession, disability, danger, and retrospective-diagnosis rules. Reader question: "What counted as mental illness before 'mental illness'?"

- [x] G1: Draft file exists at content/guides/Q02.md
  CHECK: test -f content/guides/Q02.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/guides/Q02.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/guides/Q02.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: (no output)

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/guides/Q02.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: (no output)

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/guides/Q02.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: (no output)

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/guides/Q02.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: (no output)

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/guides/Q02.md
  EXPECT: /^0$/
  EVIDENCE: (no output)

- [x] G8: Draft links to backbone spine and internal pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|Q01|Q02|T00|T01|H02|H03|H05' content/guides/Q02.md
  EXPECT: /^[3-9]$/
  EVIDENCE: (no output)

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/guides/Q02.md | grep '^- \[' | grep -cv '\[Source:'
  EXPECT: /^0$/
  EVIDENCE: (no output)
