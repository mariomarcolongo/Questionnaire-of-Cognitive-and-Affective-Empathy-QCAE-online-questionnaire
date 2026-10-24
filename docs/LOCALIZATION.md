# Localization guide and glossary

This glossary covers the interactive questionnaire in all eight active locales. It records the current UI terminology; it is not a new translation or scientific validation of the questionnaire.

## Scope and source of truth

- Project-owned UI strings live in `data/ui.json` with overrides and Russian/Korean additions in `data/ui-packs.v1.json`. Overrides win. Add every key explicitly to each locale; do not rely on English fallback to complete a translation.
- The localized experience includes the intro, privacy notice, acknowledgement, questions, response labels, results, export buttons, source details, header/footer, skip link, and navigation accessibility labels.
- The eight static language landing pages have localized explanatory text. The supporting About, References, Privacy, Rights, and Agents pages remain English, as does the static homepage fallback before JavaScript loads. Localized navigation labels do not imply that those destination documents have been translated.
- JSON/CSV field names, schema identifiers, QCAE, JSON, CSV, PDF, DOIs, and bibliographic titles remain stable. An export button is translated; its machine-readable field names are not.
- If loading fails before translations are available, the startup error is in English. Errors after translations load use the selected locale.

## Terminology

| UI key | en | fr | pt-PT | de |
| --- | --- | --- | --- | --- |
| `cognitiveEmpathy` | Cognitive empathy | Empathie cognitive | Empatia cognitiva | Kognitive Empathie |
| `affectiveEmpathy` | Affective empathy | Empathie affective | Empatia afetiva | Affektive Empathie |
| `perspectiveTaking` | Perspective taking | Prise de perspective | Tomada de perspetiva | Perspektivübernahme |
| `onlineSimulation` | Online simulation | Simulation en ligne | Simulação online | Online-Simulation |
| `emotionContagion` | Emotion contagion | Contagion émotionnelle | Contágio emocional | Emotionale Ansteckung |
| `proximalResponsivity` | Proximal responsivity | Réactivité proximale | Responsividade proximal | Proximale Responsivität |
| `peripheralResponsivity` | Peripheral responsivity | Réactivité périphérique | Responsividade periférica | Periphere Responsivität |
| `total` | Total QCAE | Score QCAE total | Resultado QCAE total | QCAE-Gesamtwert |
| `score` | Score | Score | Resultado | Wert |
| `subscale` | Subscale | Sous-échelle | Subescala | Subskala |
| `possibleRange` | Possible range | Étendue possible | Intervalo possível | Möglicher Bereich |
| `scoredValue` | Scored value | Valeur cotée | Valor cotado | Gewerteter Wert |

| UI key | en | sr-Latn | tr | ru | ko |
| --- | --- | --- | --- | --- | --- |
| `cognitiveEmpathy` | Cognitive empathy | Kognitivna empatija | Bilişsel empati | Когнитивная эмпатия | 인지적 공감 |
| `affectiveEmpathy` | Affective empathy | Afektivna empatija | Duygusal empati | Аффективная эмпатия | 정서적 공감 |
| `perspectiveTaking` | Perspective taking | Zauzimanje perspektive | Bakış açısı alma | Способность к децентрации | 관점 취하기 |
| `onlineSimulation` | Online simulation | Onlajn simulacija | Çevrimiçi simülasyon | Склонность к децентрации | 온라인 시뮬레이션 |
| `emotionContagion` | Emotion contagion | Emocionalna zaraza | Duygusal bulaşma | Отзеркаливание эмоций | 정서 전염 |
| `proximalResponsivity` | Proximal responsivity | Proksimalna responzivnost | Yakın tepkisellik | Чувствительность к близким | 근접 반응성 |
| `peripheralResponsivity` | Peripheral responsivity | Periferna responzivnost | Çevresel tepkisellik | Общая чувствительность | 주변 반응성 |
| `total` | Total QCAE | Ukupan QCAE rezultat | Toplam QCAE | Общий балл QCAE | QCAE 총점 |
| `score` | Score | Rezultat | Puan | Балл | 점수 |
| `subscale` | Subscale | Podskala | Alt boyut | Субшкала | 하위척도 |
| `possibleRange` | Possible range | Mogući raspon | Olası aralık | Возможный диапазон | 가능한 점수 범위 |
| `scoredValue` | Scored value | Bodovana vrednost | Puanlanmış değer | Балл после обработки | 채점값 |

“Online simulation” names a QCAE psychological construct, not an internet service. Keep the established term rather than substituting a networking or AI meaning. Russian subscale names are adaptation-specific; they are not intended as literal translations of the English labels.

Use raw scores (French: *scores bruts*; Portuguese: *resultados brutos*; German: *Rohwerte*; Serbian: *sirovi rezultati*; Turkish: *ham puanlar*; Russian: *сырые баллы*; Korean: *원점수*). Do not turn scores into diagnoses, percentiles, or normative labels.

Keep Portuguese specific to Portugal (`pt-PT`), and Serbian in Latin script (`sr-Latn`). Use the locale's native language name in the selector.

## Protected instrument content

The glossary governs UI consistency, not permission to rewrite questionnaire items or response anchors. Preserve published wording in `data/qcae.v1.json` and `data/locale-packs.v1.json`; check any proposed correction against the locale's source IDs in the merged reference registry first. Bibliographic titles stay in their source language.

Preserve reverse scoring for original items 1, 2, 17, and 29, where included. Portuguese excludes original item 17; Russian excludes 1 and 17; Korean excludes 1, 14, 17, 18, and 28. Methodology copy should describe the selected variant rather than imply that excluded items are administered.

German remains a provisional research translation pending reconciliation with the 2024 validated wording. Serbian remains a repository translation. UI completeness does not change those statuses or establish a new validated adaptation.

## Review checklist

1. Edit the authored dictionary and update this glossary when terminology changes.
2. Run `npm test`: validation checks locale keys before fallback, active warning text, item wording presence, response anchors, source IDs, variant item sets, and glossary consistency.
3. Check intro, acknowledgement, first/last question, results, source details, and navigation after changing language. Verify long text, native scripts, keyboard access, and narrow screens.
4. Run `node bin/qcae-score.mjs --list-variants` and score `examples/responses.en.synthetic.json`.
5. Report linguistic or source uncertainties explicitly. This glossary and automated checks support maintenance; they do not certify native-speaker review or psychometric equivalence.
