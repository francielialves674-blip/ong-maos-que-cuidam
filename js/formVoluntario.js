import {salvarVoluntario} from './storage.js';
export function initForm(){
  const form=document.getElementById('formVoluntario'); 
  if(!form) return;
  const nome=document.getElementById('nome'), email=document.getElementById('email');
  const erroNome=document.getElementById('erro-nome'), erroEmail=document.getElementById('erro-email');
  const feedback=document.getElementById('feedback-form'), toast=document.getElementById('toast');
  function toastShow(m){ if(!toast) return; toast.textContent=m; toast.classList.add('ativo'); setTimeout(()=>toast.classList.remove('ativo'),3000); }
  form.addEventListener('submit',e=>{
    e.preventDefault(); 
    let ok=true;
    nome.classList.remove('campo-erro','campo-sucesso'); 
    email.classList.remove('campo-erro','campo-sucesso');
    erroNome.textContent=''; erroEmail.textContent=''; feedback.innerHTML='';
    if(nome.value.trim().length<3){ erroNome.textContent='Digite seu nome completo (mín. 3 letras)'; nome.classList.add('campo-erro'); ok=false; } else { nome.classList.add('campo-sucesso'); }
    if(!email.value.includes('@') || !email.value.includes('.')){ erroEmail.textContent='E-mail inválido. Ex: seu@email.com'; email.classList.add('campo-erro'); ok=false; } else { email.classList.add('campo-sucesso'); }
    if(!ok){ feedback.innerHTML='<div class="alerta alerta-erro">❌ Erro: preencha os campos obrigatórios corretamente.</div>'; return; }
    salvarVoluntario({nome:nome.value.trim(), email:email.value.trim()});
    feedback.innerHTML='<div class="alerta alerta-sucesso">✅ Cadastro realizado com sucesso! Obrigado!</div>';
    toastShow(`Obrigado, ${nome.value}! 💚`);
    form.reset();
    setTimeout(()=>{ nome.classList.remove('campo-sucesso'); email.classList.remove('campo-sucesso'); },2000);
  });
}