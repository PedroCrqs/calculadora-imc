// Calculadora de índice da massa corporal

function calcularIMC(peso, altura) {
  if (peso <= 0 || altura <= 0) {
    return "Valores inválidos.";
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc <= 24.9) {
    classificacao = "Peso normal";
  } else if (imc <= 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc <= 34.9) {
    classificacao = "Obesidade grau 1";
  } else if (imc <= 39.9) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  return `IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
}

// Captura o formulário e adiciona o evento de envio
document.getElementById("imcForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Obtém os valores dos campos de entrada
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Calcula o IMC e exibe o resultado
  const resultado = calcularIMC(peso, altura);
  document.getElementById("resultado").textContent = resultado;
});
