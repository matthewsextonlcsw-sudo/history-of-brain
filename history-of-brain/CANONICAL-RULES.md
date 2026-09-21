# Canonical-URL and Content-Identity Rules

**Applies to:** every public history page in the Couch Commons collection.
**Status:** enforced by the lint rule in §3 and by the change-control ruling in
`PROJECT-BRAIN.md` §18.

## Rule

A history article's external canonical URL is empty by default, so Couch Commons remains
its canonical home. No other domain, mirror, archive snapshot, or platform serves as the
canonical source for project history content.

## Exception process

Only Matthew Sexton, in writing (a dated message or a ruling recorded in `PROJECT-BRAIN.md`
§18 Rulings), may set or change a canonical URL for a history page. The exception, date,
page, and reason are recorded in the same ruling. An exception without a recorded ruling is
treated as a violation.

## Lint rule

Any export, build, or content sync that produces a public page with a non-empty external
canonical URL for a history article fails review. The check is mechanical:

1. For each public page, read its canonical-URL field.
2. If the value is non-empty, check `PROJECT-BRAIN.md` §18 Rulings for a matching Matthew
   ruling (date, page, reason).
3. No matching ruling → fail. The page must be corrected before it advances past Gate 8
   (Matthew's editorial approval).

The lint rule applies to exports and sync payloads, not to this repository's source files,
which carry no canonical-URL field.
