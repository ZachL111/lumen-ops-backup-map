# Lumen Ops Backup Map Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 160 | ship |
| stress | rename risk | 188 | ship |
| edge | operator cost | 211 | ship |
| recovery | idempotence | 119 | watch |
| stale | dry-run spread | 231 | ship |

Start with `stale` and `recovery`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `dry-run spread` against `idempotence`, not the raw score alone.
