function resetOutputs() {
    document.getElementById("output-piramide").textContent = "";
    document.getElementById("output-tabuleiro").textContent = "";
    document.getElementById("output-palindromo").textContent = "";
    document.getElementById("output-lista").textContent = "";
    document.getElementById("output-minmax").textContent = "";
}

function piramide(){
    const linhas = parseInt(document.getElementById("input-piramide").value);
    let resultado = "";
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j <= i; j++) {
            resultado += "#"
        }
        resultado += "\n"
    }
    document.getElementById("output-piramide").textContent = resultado;
}

function tabuleiro(){
    const linhas = parseInt(document.getElementById("input-tabuleiro").value);
    let resultado = "";
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < linhas; j++) {
            if(j % 2 == i % 2){
                resultado += "#";
            } else {    
                resultado += " ";
            }
        }
        resultado += "\n";
    }
    document.getElementById("output-tabuleiro").textContent = resultado;
}

function palindromo(){
    const palavra = document.getElementById("input-palindromo").value;
    let resultado = "É um palíndromo!";
    for (let i = 0; i < Math.floor(palavra.length / 2); i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            resultado = "Não é um palíndromo";
            break;
        }
    }
    document.getElementById("output-palindromo").textContent = resultado;
}

function lista(){
    const tamanho = document.getElementById("input-lista").value;
    let resultado = "";
    for (let i = 1; i <= tamanho; i++) {
        if( i % 3 == 0)
            resultado += "Fizz";
        if( i % 5 == 0)
            resultado += "Buzz";
        if( i % 3 != 0 && i % 5 != 0)
            resultado += i;
        resultado += "\n";
    }
    document.getElementById("output-lista").textContent = resultado;
}

function minimo(){
    const numero1 = parseInt(document.getElementById("input-minmax1").value);
    const numero2 = parseInt(document.getElementById("input-minmax2").value);
    const min = Math.min(numero1, numero2);
    document.getElementById("output-minmax").textContent = min;
}

function maximo(){
    const numero1 = parseInt(document.getElementById("input-minmax1").value);
    const numero2 = parseInt(document.getElementById("input-minmax2").value);
    const max = Math.max(numero1, numero2);
    document.getElementById("output-minmax").textContent = max;
}

function contarCaractere() {
    const frase = document.getElementById("input-frase").value;
    const caractere = document.getElementById("input-caractere").value;
    const regex = new RegExp(caractere, 'g');
    const count = (frase.match(regex) || []).length;
    document.getElementById("output-contar").textContent = `O caractere "${caractere}" aparece ${count} vezes.`;
}