let metas = JSON.parse(localStorage.getItem("metas")) || [];

function semanaAtual() {
  const d = new Date();
  const start = new Date(d.getFullYear(), 0, 1);
  return Math.ceil((((d - start) / 86400000) + start.getDay() + 1) / 7);
}

function adicionarMeta() {
  metas.push({
    texto: metaInput.value,
    historico: []
  });
  salvar();
  renderizar();
  metaInput.value = "";
}

function marcar(i, status) {
  metas[i].historico.push({
    semana: semanaAtual(),
    status,
    data: new Date().toLocaleString("pt-BR")
  });
  salvar();
  renderizar();
}

function excluir(i) {
  metas.splice(i, 1);
  salvar();
  renderizar();
}

function salvar() {
  localStorage.setItem("metas", JSON.stringify(metas));
}

function renderizar() {
  listaMetas.innerHTML = "";
  metas.forEach((m, i) => {
    listaMetas.innerHTML += `
      <li>
        <strong>${m.texto}</strong>
        <div class="botoes">
          <button onclick="marcar(${i},'concluída')">✅</button>
          <button onclick="marcar(${i},'não consegui')">❌</button>
          <button onclick="excluir(${i})">🗑</button>
        </div>
      </li>
    `;
  });
}

renderizar();

function logout() {
  localStorage.removeItem("usuario");
  location.href = "index.html";
}
