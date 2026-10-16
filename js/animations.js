// Fundo da capa: a mão em ASCII fica trocando alguns caracteres por símbolos aleatórios.

const mao = document.getElementById('mao');
const original = mao.textContent;           // desenho original (guardado para restaurar)
const simbolos = '@%#*+=-:.01/\\|<>[]{}()$&~^;!?';

setInterval(() => {
  let texto = '';
  for (const letra of original) {
    const trocar = letra !== ' ' && letra !== '\n' && Math.random() < 0.04;   // ~4% dos caracteres
    texto += trocar ? simbolos[Math.floor(Math.random() * simbolos.length)] : letra;
  }
  mao.textContent = texto;
}, 150);
