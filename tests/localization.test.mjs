import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");
const base = JSON.parse(await read("../data/ui.json"));
const packs = JSON.parse(await read("../data/ui-packs.v1.json"));
const ui = Object.fromEntries(Object.entries(packs.locales).map(([locale, values]) => [locale, { ...base[locale], ...values }]));

test("every navigation localization binding resolves in every authored locale", async () => {
  const html = await read("../index.html");
  const keys = [...html.matchAll(/data-i18n(?:-aria-label)?="([^"]+)"/g)].map((match) => match[1]);
  assert(keys.length > 0);
  for (const [locale, strings] of Object.entries(ui)) {
    for (const key of keys) assert(strings[key]?.trim(), `Missing ${locale}.${key}`);
  }
});

test("the glossary records the UI terminology for every active locale", async () => {
  const glossary = await read("../docs/LOCALIZATION.md");
  const groups = [["en", "fr", "pt-PT", "de"], ["en", "sr-Latn", "tr", "ru", "ko"]];
  const terms = ["cognitiveEmpathy", "affectiveEmpathy", "perspectiveTaking", "onlineSimulation", "emotionContagion", "proximalResponsivity", "peripheralResponsivity", "total", "score", "subscale", "possibleRange", "scoredValue"];
  for (const locales of groups) {
    for (const key of terms) {
      assert(glossary.includes(`| \`${key}\` | ${locales.map((locale) => ui[locale][key]).join(" | ")} |`), `Glossary drift for ${key}: ${locales}`);
    }
  }
});
