import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { formatCitation } from "../src/citation.js";
import { loadReferenceRegistry } from "../src/qcae-api.js";

const registry = await loadReferenceRegistry();
const reference = (id) => registry.references.find((entry) => entry.id === id);

test("journal citations include volume, issue, and pages", () => {
  assert.equal(
    formatCitation(reference("reniers-2011")),
    "Renate L. E. P. Reniers, Rhiannon Corcoran, Richard Drake, Nick M. Shryane, Birgit A. Völlm (2011). The QCAE: A Questionnaire of Cognitive and Affective Empathy. Journal of Personality Assessment, 93(1), 84–95."
  );
  assert.match(formatCitation(reference("myszkowski-2017")), /Psychiatry Research, 255, 292–296\.$/);
});

test("article-numbered journals cite the article number", () => {
  assert.match(formatCitation(reference("queiros-2018")), /PLOS ONE, 13\(6\), Article e0197755\.$/);
  assert.match(formatCitation(reference("brunet-gouet-2019")), /Frontiers in Psychiatry, 10, Article 751\.$/);
});

test("repository and thesis citations name where the record is held", () => {
  assert.match(formatCitation(reference("bukowski-2019-osf")), / OSF\.$/);
  assert.match(formatCitation(reference("kim-2018")), / Sookmyung Women’s University Graduate School\.$/);
});

test("reference records keep their verified authors and titles", () => {
  assert(reference("queiros-2018").authors.includes("Adriana Sampaio"));
  const french = reference("brunet-gouet-2019").authors;
  assert.equal(french.length, 24);
  assert.equal(french[3], "Mathieu Urbach");
  assert.equal(french.at(-1), "Paul Roux");
  assert.match(reference("bukowski-2019-osf").title, /^When differences matter:/);
});

test("the Serbian form credits its translators and cites the instrument authors", () => {
  assert.deepEqual(reference("ivanovic-2020-osf").authors, ["Danka Purić", "Nemanja Kidžin"]);
  assert(registry.activeVariants["sr-Latn"].referenceIds.includes("reniers-2011"));
  assert(!registry.integrationCandidates.some((candidate) => candidate.locale === "sr-Latn"));
});

test("the base registry carries citation facts without relying on packs", async () => {
  const base = JSON.parse(await readFile(new URL("../data/references.v1.json", import.meta.url), "utf8"));
  const italian = base.references.find((entry) => entry.id === "di-girolamo-2019");
  assert.equal(italian.authors[0], "Marzia Di Girolamo");
  assert.equal(italian.pages, "159–170");
});
