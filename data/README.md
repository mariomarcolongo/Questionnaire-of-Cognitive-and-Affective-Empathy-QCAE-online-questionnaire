# Data resources

The complete runtime instrument is assembled from `qcae.v1.json` and `locale-packs.v1.json`. The complete reference registry is assembled from `references.v1.json` and `reference-packs.v1.json`.

UI strings merge `ui.json` with `ui-packs.v1.json`; each locale must explicitly supply every UI key before English fallback. See the [localization glossary](../docs/LOCALIZATION.md) for preferred terminology and protected instrument wording.

AI/TDM permission is declared in `ai-use-policy.v1.json`. The public deployment has no response endpoint and does not receive, store, transmit, or process questionnaire responses.
