let listaDeProdutos = [];

function mostrarFormulario() {
  const formContainer = document.getElementById("form-container");
  const listContainer = document.getElementById("list-container");
  const btnNovoProduto = document.getElementById("btnNovoProduto");

  formContainer.style.display = "block";
  listContainer.style.display = "none";
  btnNovoProduto.style.display = "none";
}

function cadastrarProduto(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(
    document.getElementById("valor").value.replace(",", ".")
  );
  const disponibilidade = document.querySelector(
    'input[name="disponibilidade"]:checked'
  ).value;

  const novoProduto = {
    nome: nome,
    descricao: descricao,
    valor: valor,
    disponibilidade: disponibilidade,
  };
  listaDeProdutos.push(novoProduto);

  renderizarProdutos();
  limparFormulario();
  mostrarLista();
}

function renderizarProdutos() {
  const tabelaProdutos = document.querySelector("table tbody");
  tabelaProdutos.innerHTML = "";

  listaDeProdutos.sort((a, b) => a.valor - b.valor);

  listaDeProdutos.forEach((produto) => {
    const row = `<tr><td>${produto.nome}</td><td>R$ ${produto.valor.toFixed(
      2
    )}</td></tr>`;
    tabelaProdutos.innerHTML += row;
  });
}

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("sim").checked = true;
}

function mostrarLista() {
  const formContainer = document.getElementById("form-container");
  const listContainer = document.getElementById("list-container");
  const btnNovoProduto = document.getElementById("btnNovoProduto");

  formContainer.style.display = "none";
  listContainer.style.display = "block";
  btnNovoProduto.style.display = "block";
}

document.querySelector("form").addEventListener("submit", cadastrarProduto);
document
  .getElementById("btnNovoProduto")
  .addEventListener("click", mostrarFormulario);

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("sim").checked = true;
}

function mostrarLista() {
  const formContainer = document.getElementById("form-container");
  const listContainer = document.getElementById("list-container");
  const btnNovoProduto = document.getElementById("btnNovoProduto");

  formContainer.style.display = "none";
  listContainer.style.display = "block";
  btnNovoProduto.style.display = "block";
}

document.querySelector("form").addEventListener("submit", cadastrarProduto);
document
  .getElementById("btnNovoProduto")
  .addEventListener("click", mostrarFormulario);
