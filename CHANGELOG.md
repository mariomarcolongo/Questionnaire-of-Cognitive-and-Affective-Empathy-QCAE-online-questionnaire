# Changelog

## Unreleased

- Made GitHub's "Cite this repository" panel cite this software; the original QCAE publication moved from `preferred-citation` to `references` and is now credited in the README.
- Corrected reference records against Crossref, DataCite, PubMed, OSF, and REPOPSI: Adriana Sampaio's name, the full Brunet-Gouet et al. author list, the Bukowski et al. and Kim record titles, and the Di Girolamo et al. record in the base registry.
- Credited the Serbian translation to Danka Purić and Nemanja Kidžin, confirmed its CC BY-NC-SA 4.0 licence, and added the original QCAE publication to its sources as REPOPSI requires.
- Restored volume, issue, pages, and article numbers on the References page and replaced its "Open source record" link label.
- Removed homepage `citation_*` tags that described the page as the QCAE paper.

## 1.1.0 - 2026-07-22

- Linked every enabled language to its validation paper or source record.
- Added a human-readable references registry and machine-readable `data/references.v1.json`.
- Added the validated Turkish 31-item form and its 2024 correction metadata.
- Added candidate records for Italian, Chinese, Russian, Korean, and validated German versions without enabling unverified wording.
- Replaced raw Markdown footer links with human-readable About, Privacy, Rights, References, and Agent pages.
- Added `src/qcae-api.js`, a dependency-free CLI, response schema, reference schema, capability manifest, and synthetic input fixture.
- Added semantic automation IDs, `data-qcae-*` markers, and the read-only `window.QCAE_APP` browser contract.
- Added `llms-full.txt` and expanded agent-maintenance invariants.
- Clarified that technical access does not override content rights, participant consent, or data-protection obligations.

## 1.0.0 - 2026-07-22

- Replaced the SurveyJS/jQuery prototype with a dependency-free static application.
- Added accessible one-question-at-a-time navigation.
- Added English, Serbian Latin, French, Portuguese (Portugal), and German interfaces.
- Added locale provenance and confidence/status metadata.
- Added the validated 30-item Portuguese variant excluding item 17.
- Added pure scoring functions and automated tests.
- Added local JSON and CSV export and print-to-PDF support.
- Added machine-readable JSON schemas, `llms.txt`, and `AGENTS.md`.
- Added privacy, security, and questionnaire-content rights documentation.
- Corrected corrupt Unicode characters in French, Portuguese, and German source data.
- Corrected clear typographical errors in Serbian items 6 and 30 and Portuguese item 8.
- Restored the published French wording and response anchors exactly.
- Stabilized the completion timestamp across JSON, CSV, and clipboard exports.
