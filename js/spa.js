import { carregarVoluntario } from './storage.js';
export function initPersistencia() {
  const voluntario = carregarVoluntario();
  if (!voluntario) return;
  
  // Reflete na tela se já existe cadastro (diferencial pedido)
  const hero = document.querySelector('.hero p');
  if (hero && window.location.pathname.includes('cadastro')) {
    const div = document.createElement('div');
    div.className = 'alerta alerta-aviso';
    div.textContent = `⚠️ Você já tem um cadastro como ${voluntario.nome} em ${voluntario.data}`;
    document.querySelector('.container').prepend(div);
  }
}