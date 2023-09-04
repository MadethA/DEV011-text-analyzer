import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

function limpiar() {
    document.body.querySelector('[name="user-input"]').value=" "
    document.body.querySelector('[data-testid="word-count"]').innerHTML ="Palabras = 0 "
    document.body.querySelector('[data-testid="character-count"]').innerHTML ="Caracteres = 0"
    document.body.querySelector('[data-testid="character-no-spaces-count"]').innerHTML="Caracteres sin espacio = 0"
    document.body.querySelector('[data-testid="number-count"]').innerHTML="Numeros = 0"
}

// Función que se ejecuta en el evento 'keyup' del <textarea>
function keyup(){
    const textarea = document.body.querySelector('[name="user-input"]');
    const value=textarea.value;

    //analyzer.getWordCount(value);
    const wordCount= analyzer.getWordCount(value);
    const liWordCount = document.body.querySelector('[data-testid="word-count"]');
    liWordCount.innerHTML = `Palabras = ${wordCount}` 

    //analyzer.getCharacterCount(value);
    const characterCount = analyzer.getCharacterCount(value);
    const liCharacterCount = document.body.querySelector('[data-testid="character-count"]');
    liCharacterCount.innerHTML = `Caracteres = ${characterCount}`

    //analyzer.getCharacterCountExcludingSpaces(value);
    const characterWithoutSpaces= analyzer.getCharacterCountExcludingSpaces(value);
    const liCharacterWithoutSpaces = document.body.querySelector('[data-testid="character-no-spaces-count"]');
    liCharacterWithoutSpaces.innerHTML = `Caracteres sin espacio = ${characterWithoutSpaces}`

    //analyzer.getAverageWordLength(value)
    const wordLenght = analyzer.getAverageWordLength(value);
    const ligetAverageWordLength = document.body.querySelector('[data-testid="word-length-average"]');
    ligetAverageWordLength.innerHTML = `Promedio de longitud = ${wordLenght }`

    //analyzer.getNumberCount(value)
    const numberCount = analyzer.getNumberCount(value);
    const ligetNumberCount = document.body.querySelector('[data-testid="number-count"]');
    ligetNumberCount.innerHTML = `Números = ${numberCount}`

    //analyzer.getNumberSum(value)
    const numberSum = analyzer.getNumberSum(value)
    const ligetNumberSum = document.body.querySelector('[data-testid="number-sum"]')
    ligetNumberSum.innerHTML = `Suma de números = ${numberSum}`
}

 
//DOM
document.getElementById("reset-button").addEventListener("click",limpiar)
document.body.querySelector('[name="user-input"]').addEventListener("keyup",keyup)
