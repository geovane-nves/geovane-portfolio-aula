// Tema claro/escuro: segue a preferência do navegador (ou do sistema) de quem acessa.
// Coloca data-tema="claro" ou data-tema="escuro" no <html>; as cores de cada tema
// estão nas variáveis de css/style.css.
//
// Este arquivo é carregado no <head>, SEM defer, para o tema ser aplicado antes da
// página aparecer (evita o "flash" de tema errado).

(function () {
  const preferenciaEscura = window.matchMedia('(prefers-color-scheme: dark)');

  function aplicarTema() {
    document.documentElement.dataset.tema = preferenciaEscura.matches ? 'escuro' : 'claro';
  }

  aplicarTema();

  // se o visitante trocar o tema do sistema com a página aberta, acompanha na hora
  if (preferenciaEscura.addEventListener) {
    preferenciaEscura.addEventListener('change', aplicarTema);
  } else {
    preferenciaEscura.addListener(aplicarTema);   // Safari antigo
  }
})();
