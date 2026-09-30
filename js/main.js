import { initMenu } from './menu.js';
import { initForm } from './formVoluntario.js';
import { initPersistencia } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initForm();
  initPersistencia();
});