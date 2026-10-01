export function initMenu() {
  const btn = document.getElementById('btn-menu');
  const nav = document.getElementById('menu-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('ativo'));
}