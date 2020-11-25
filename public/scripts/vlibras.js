const vlibrasDiv = document.getElementById('vlibras');

vlibrasDiv.innerHTML = `<div vw class="enabled">
<div vw-access-button class="active"></div>
<div vw-plugin-wrapper>
  <div class="vw-plugin-top-wrapper"></div>
</div>
</div>`;

new window.VLibras.Widget('https://vlibras.gov.br/app');
