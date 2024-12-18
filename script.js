function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      resultadoDiv.textContent = "Por favor, insira valores válidos!";
      resultadoDiv.style.color = "red";
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    resultadoDiv.textContent = `Seu IMC é ${imc} (${classificacao}).`;
    resultadoDiv.style.color = "#333";
  }