# Leaf gates: Q08 — How to Check a "First" Claim

Scope: Write the Q08 content page (content/guides/Q08.md): how to check a "first" claim.
Reader question: "How do I check a 'first' claim?"

- [x] G1: Draft file exists at content/guides/Q08.md
  CHECK: test -f content/guides/Q08.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/guides/Q08.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [x] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/guides/Q08.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: (no output)

- [x] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/guides/Q08.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: (no output)

- [x] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/guides/Q08.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: (no output)

- [x] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/guides/Q08.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: (no output)

- [x] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/guides/Q08.md
  EXPECT: /^0$/
  EVIDENCE: (no output)

- [x] G8: Draft links to backbone spine and internal pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|H00|H01|H02|H03|H04|H05|H06|H07|Q01|Q02|Q03|Q04|Q05|Q06|Q07|Q09|Q10|Q11|Q12|P01|P02|P03|P04|P05|P06|P07|P08|P09|P10|P11|P12|P13|P14|P15|P16|P17|P18|X01|X02|X03|X04|X05|X06|X07|X08|X09|X10|X11|X12|E01|E02|E03|E04|E05|E06|E07|E08|E09|T00|T01|T02|T03|T04|T05|T06|T07|T08|T09|T10' content/guides/Q08.md
  EXPECT: /^[3-9]$/
  EVIDENCE: (no output)

- [x] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/guides/Q08.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: (no output)
