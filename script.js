function calcular() { // define a funcao que vai ser passar, aqui no caso é calculo, então é function calcular
    const f1 = Number(document.querySelector("#extremidadea").value); // Constante de força 1, cria a variavel
    const f2 = Number(document.querySelector("#extremidadeb").value); // Constante de força 2, cria a variavel
    const d1 = Number(document.querySelector("#distanciaa").value); // Constante de distancia 1, cria a variavel
    const d2 = Number(document.querySelector("#distanciab").value); // Constante de distancia 2, cria a variavel
    
    const torque = f1 * d1 - (d2 * f2)  // Aqui é onde fica a formula da calculadora e faz o processamento dos numeros nas variaveis
    if (torque === 0) {
        document.querySelector("#Resultado").textContent = "Existe Equilíbrio!!!"
    } else {
        document.querySelector("#Resultado").textContent = "Não existe equilíbrio!!!"
    }
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular); // Responsável por fazer o botao calcular a variavel
});