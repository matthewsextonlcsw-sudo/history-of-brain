# Leaf gates: V01 — People Speaking for Themselves

Scope: Write the V01 content page (content/lived-experience/V01.md): index
letters, petitions, memoirs, testimony, oral history, publications, art, and
recorded speech with mediation notes. Reader question: "Are these really
patient stories?" Must trace the chain of hands, not pretend it was raw.

- [x] G1: Draft file exists at content/lived-experience/V01.md
  CHECK: test -f content/lived-experience/V01.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/lived-experience/V01.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/lived-experience/V01.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: 9

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/lived-experience/V01.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: 593

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/lived-experience/V01.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: 10

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/lived-experience/V01.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: 1

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/lived-experience/V01.md
  EXPECT: /^0$/
  EVIDENCE: 0

- [x] G8: Draft links to backbone spine and H03/H04 internal pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|H03|H04' content/lived-experience/V01.md
  EXPECT: /^[3-9]$/
  EVIDENCE: 6

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/lived-experience/V01.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: 0
