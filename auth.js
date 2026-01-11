function login() {
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  localStorage.setItem("usuario", JSON.stringify({
    nome: nome,
    email: email
  }));

  window.location.href = "dashboard.html";
}

// Protege páginas internas
function proteger() {
  if (!localStorage.getItem("usuario")) {
    window.location.href = "index.html";
  }
}
