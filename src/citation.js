/**
 * Pure citation formatting for reference registry entries.
 * No DOM access, storage, analytics, or network calls.
 */

function publicationDetails(reference) {
  if (!reference.journal) return reference.repository ?? reference.publisher ?? "";
  const issue = reference.issue ? `(${reference.issue})` : "";
  const volume = reference.volume ? `, ${reference.volume}${issue}` : "";
  const locator = reference.pages ?? (reference.article ? `Article ${reference.article}` : null);
  return `${reference.journal}${volume}${locator ? `, ${locator}` : ""}`;
}

export function formatCitation(reference) {
  const authors = reference.authors?.join(", ") ?? "";
  return `${authors} (${reference.year}). ${reference.title}. ${publicationDetails(reference)}.`;
}
