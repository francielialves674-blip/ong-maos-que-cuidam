const CHAVE = 'voluntarioMaosQueCuidam';

export function salvarVoluntario(dados) {
  localStorage.setItem(CHAVE, JSON.stringify({...dados, data: new Date().toLocaleString('pt-BR')}));
}

export function carregarVoluntario() {
  const dados = localStorage.getItem(CHAVE);
  return dados ? JSON.parse(dados) : null;
}

export function initPersistencia() {
  const dadosSalvos = carregarVoluntario();
  const feedback = document.getElementById('feedback-form');
  if (!feedback || !dadosSalvos) return;

  feedback.innerHTML = `
    <div style="background:#dcfce7;border:1px solid #16a34a;padding:1rem;border-radius:8px;">
      <strong>Último cadastro:</strong><br>
      ${dadosSalvos.nome} - ${dadosSalvos.email}<br>
      <small>em ${dadosSalvos.data}</small>
    </div>
  `;
}