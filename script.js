
function criptografar() {

    let input = document.getElementById("input").value;
    let resultado = document.getElementById("resultado");
    

   let collection = document.getElementsByClassName("output1");
   collection[0].style.visibility = "hidden";

    resultado.innerHTML = `${input}`
   let button = document.getElementsByClassName("container-button-copiar");
    button[0].style.visibility = "visible";

    console.log(input);
   // console.log();

}