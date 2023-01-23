//guardando o input 
const textAreaDoInput = document.querySelector(".input");
//console.log(input)

//guardando o output
const textAreaDoOutput= document.querySelector(".output");
//console.log(output)

//guardando as mensagens do output
const mensagem = document.querySelector("#mensagem");

const informacao = document.querySelector("#informacao");

//Adicionando um listener nos buttons com event  click
 const btnDeCopiar = document.querySelector(".container-button-copiar");
 const btnDeCriptografar = document.querySelector(".criptografar");

 btnDeCopiar.addEventListener("click", copy);
 btnDeCopiar.addEventListener("click", parar);
 btnDeCriptografar.addEventListener("click", display);

 //funcao copia o output do text area
 function copy() {
         //let input = document.querySelector("#input")
         //console.log (copyText);
        textAreaDoInput.focus();
        navigator.clipboard.writeText(textAreaDoOutput.value) ;        
        //funcao que copia conteudo
        btnDeCopiar.innerText = "Copiado"                       // adicionando um novo estado para o button
        btnDeCopiar.classList.add("ativo")                      //adicionando uma classe (ativo)
       }
       //funcao que aciona a funcao removeClassList por tempo
       function parar(){

        setTimeout(mudaEstado,10000)     //timeout de 5000mls
       }
       //funcao que muda  o estado dos elementos html
       function mudaEstado(){

        //remove a classe ativo do button copiar
        btnDeCopiar.classList.remove("ativo");  
        
        //adiciona um label para o button
        btnDeCopiar.innerText = "Copiar";
        
        //remove a classe background do textArea output
        textAreaDoOutput.classList.remove("background");

      

        //muda o display da mensagem do ouput para visivel
        mensagem.style.display="block";
        
        //muda o display da informacao do output para visivel
        informacao.style.display="block";
       
        //muda a visiiblidade do button para hidden
        btnDeCopiar.style.visibility="hidden";

          //limpa o output
          textAreaDoOutput.value = "";
        
       }

       function display(){
        
        //adicionando uma classe para o output

        textAreaDoOutput.classList.add("background");
        
        //apagando o display do output
        mensagem.style.display="none";
        informacao.style.display="none";

        //Mudando o style do button copiar
        btnDeCopiar.style.visibility="visible";
        
        
       }


    //funcao que chama a funcao conversap

    function chamaCriptografia(){

        

        //guardamos o retorno da funcao criptografar em uma variavel
        //a funcao recebe o parametro do textArea e captura seu valor
        const stringCriptografada = criptografia(textAreaDoInput.value);
        
        //no output declaramos o seu valor com o conteudo da variavel string criptografada
        textAreaDoOutput.value = stringCriptografada ;       
        
        //limpamos o output
        textAreaDoInput.value = "";
    }





    // funcao que manipula e converte as strings
     function criptografia(stringDoInput){

        let = matrizDaCriptografia = [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"], ["u", "ufat"]];

        console.log(matrizDaCriptografia)
        stringDoInput = stringDoInput.toLowerCase();

        //buscar na minha matriz
        for (i=0;i < matrizDaCriptografia.length; i++) {
            if(stringDoInput.includes(matrizDaCriptografia[i][0])){
                stringDoInput = stringDoInput.replaceAll(matrizDaCriptografia[i][0], matrizDaCriptografia[i][1])
     
    } 
        }
    console.log(stringDoInput);

     return stringDoInput;

}


    //funcao que chama a funcao desconversao

    function chamaDescriptografia(){

        
        //guardamos o retorno da funcao descriptografar em uma variavel
        //a funcao recebe o parametro do textArea e captura seu valor
        const stringDescriptografada = descriptografia(textAreaDoOutput.value);
        
        //no output declaramos o seu valor com o conteudo da variavel string criptografada
        textAreaDoOutput.value = stringDescriptografada ;       
        
        //limpamos o output
        textAreaDoInput.value = "";
    }





// funcao que manipula e converte as strings
function descriptografia(stringDoOutput){

    let = matrizDaCriptografia = [["e", "enter"], ["i", "imes"],["a","ai"],["o","ober"], ["u", "ufat"]];

    //console.log(matrizDaCriptografia)
  //  stringDoInput = stringDoInput.toLoWerCase();

    //buscar na minha matriz
    for (i=0;i < matrizDaCriptografia.length; i++) {
        if(stringDoOutput.includes(matrizDaCriptografia[i][1])){
            stringDoOutput = stringDoOutput.replaceAll(matrizDaCriptografia[i][1], matrizDaCriptografia[i][0])
 
} 
    }
//console.log(stringDoOutput);

 return stringDoOutput;

}



