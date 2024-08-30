function encriptarDesencriptar(modo) {
  const texto = document.getElementById('texto').value.toLowerCase();

  // Validación: solo letras y espacios
  if (!/^[a-z\s]+$/.test(texto)) {
    alert('Por favor, ingrese solo letras y espacios.');
    return;
  }

  const diccionario = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
  };

  // Función para invertir el diccionario
  const invertirDiccionario = (dicc) => {
    return Object.fromEntries(Object.entries(dicc).map(([key, value]) => [value, key]));
  };

  const diccionarioInvertido = invertirDiccionario(diccionario);

  const textoProcesado = texto.replace(/[aeiou]/gi, (match) => {
    return modo === 'encriptar' ? diccionario[match] : diccionarioInvertido[match] || match;
  });

  // Desencriptar múltiples sustituciones consecutivas (ej: "ai" -> "a")
  const textoDesencriptado = textoProcesado.replace(/\b(enter|imes|ai|ober|ufat)\b/gi, (match) => {
    return diccionarioInvertido[match];
  });

  document.getElementById('resultado').value = textoDesencriptado;

}


// Llamadas a las funciones desde los botones
document.getElementById('btnEncriptar').onclick = () => encriptarDesencriptar('encriptar');
document.getElementById('btnDesencriptar').onclick = () => encriptarDesencriptar('desencriptar');
