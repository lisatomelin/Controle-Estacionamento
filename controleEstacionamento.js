document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formEstacionamento");
  const tabela = document.querySelector("#tabelaEstacionamento tbody");


  form.addEventListener("submit", function (event) {
    event.preventDefault();


    const placa = document.getElementById("placaVeiculo").value;
    const nomeProprietario = document.getElementById("nomeProprietario").value;
    const numeroApartamento = document.getElementById("numeroDoApartamento").value;
    const bloco = document.getElementById("blocoDoApartamento").value;
    const modelo = document.getElementById("modeloDoVeiculo").value;
    const cor = document.getElementById("corDoVeiculo").value;
    const numVaga = document.getElementById("NumVagaEstacionamento").value;

    console.log("\nPlaca do Veículo:" + placa + ", " +
      "\nNome do Proprietário:" + nomeProprietario + ", " +
      "\nNúmero do Apartamento:" + numeroApartamento + ", " +
      "\nNúmero da Vaga:" + numVaga + ", " +
      "\nBloco:" + bloco + ", " +
      "\nModelo do Veículo:" + modelo + ", " +
      "\nCor do Veículo:" + cor + ", ")

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `      
      <td>${placa}</td>
      <td>${nomeProprietario}</td>
      <td>${numeroApartamento}</td>
      <td>${bloco}</td>
      <td>${modelo}</td>
      <td>${cor}</td>
      <td>${numVaga}</td>
    `;

    tabela.appendChild(novaLinha);

    form.reset();
  });
});