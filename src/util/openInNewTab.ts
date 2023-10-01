export function openInNewTab(link: string) {
  window.open(link, '_blank')?.focus();
}