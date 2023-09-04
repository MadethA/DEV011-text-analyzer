const analyzer = {  
    
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (text) => {
    const words = text.trim().split(" ");
  return words.length
  },

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.   
  getCharacterCount: (text) => {
    const characterCount = text.length
    return text.length
  },
   

      //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
   const characterExSpaces = text.replaceAll(/[\s.,\/#!$%\^&\*;:{}=\-_`~()\[\]"'¿¡?¿!]/g, '')

   return characterExSpaces.length; 
 },


    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => { 
    const words = text.trim().replace( /\s\s+/g, ' ' ).split(" ")
    let totalLength = 0;

        // Usa un bucle for para calcular la longitud total de todas las palabras
        for (let posI = 0; posI < words.length; posI++) {
            totalLength += words[posI].length;
        }
        const numero = (totalLength / words.length);
        return Number(numero.toFixed(2));
  },

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const palabras = text.trim().replace( /\s\s+/g, ' ' ).split(" ")
    let contadorNumeros = 0;
    

    for(let i=0; i<(palabras.length); i++){
      const palActual = palabras[i];
      if(!isNaN(palActual)){
        contadorNumeros = contadorNumeros +1
      }
    } 
    return contadorNumeros;

  },
  
  
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  getNumberSum: (text) => {
    const palabras = text.trim().replace( /\s\s+/g, ' ' ).split(" ")
    let sumarNumeros = 0;


    for(let i=0; i<(palabras.length); i++){
      const palActual = palabras[i];

      if(!isNaN(palActual)){
        sumarNumeros += parseFloat(palActual);
      }
    }
    return sumarNumeros;
  },

};


export default analyzer;
