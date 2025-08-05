function binarioParaOctal() {
  let binarioInput = document.getElementById("binario");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let binario = binarioInput.value.trim();

  if (binario === "" || !/^[01]+$/.test(binario)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor binário válido (apenas 0 e 1).";
    passos.innerHTML = "";
    return;
  }

  let binOriginal = binario;
  let etapas = [];

  // Preencher com zeros à esquerda para múltiplos de 3
  while (binario.length % 3 !== 0) {
    binario = "0" + binario;
  }

  etapas.push(`Ajustando binário para múltiplos de 3 bits: ${binario}`);

  let octal = "";

  for (let i = 0; i < binario.length; i += 3) {
    let grupo = binario.substr(i, 3);
    let valorDecimal = parseInt(grupo, 2);
    etapas.push(`${grupo} → ${valorDecimal} (octal)`);
    octal += valorDecimal;
  }

  octalInput.value = octal;
  resultado.innerHTML = `Binário: <strong>( ${binOriginal} )₂</strong> → Octal: <strong>( ${octal} )₈</strong>`;

  etapas.push(`<br><strong>Resultado final: ( ${binOriginal} )₂ → ( ${octal} )₈</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Binário → Octal:</strong><br>" +
    etapas.join("<br>");
}

function octalParaBinario() {
  let binarioInput = document.getElementById("binario");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let octal = octalInput.value.trim();

  if (octal === "" || !/^[0-7]+$/.test(octal)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (apenas dígitos de 0 a 7).";
    passos.innerHTML = "";
    return;
  }

  let etapas = [];
  let binario = "";

  for (let i = 0; i < octal.length; i++) {
    let digito = octal[i];
    let valorDecimal = parseInt(digito, 8);
    let grupoBin = valorDecimal.toString(2).padStart(3, '0');
    etapas.push(`${digito} (octal) → ${valorDecimal} (decimal) → ${grupoBin} (binário)`);
    binario += grupoBin;
  }

  binarioInput.value = binario;
  resultado.innerHTML = `Octal: <strong>( ${octal} )₈</strong> → Binário: <strong>( ${binario} )₂</strong>`;

  etapas.push(`<br><strong>Resultado final: ( ${octal} )₈ → ( ${binario} )₂</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Octal → Binário:</strong><br>" +
    etapas.join("<br>");
}
