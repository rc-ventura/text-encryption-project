
//Adicionando um listener nos buttons com event  click
 const btn = document.querySelector(".container-button-copiar");
 btn.addEventListener("click", copy)
 btn.addEventListener("click", parar)

 //funcao copiar resultado do text area
 function copy() {
         let copyText = document.querySelector("#resultado");
         //let input = document.querySelector("#input")

        navigator.clipboard.writeText(copyText.textContent)     //funcao que copia conteudo
        btn.innerText = "Copiado"                       // adicionando um novo estado para o button
        btn.classList.add("ativo")                      //adicionando uma classe (ativo)

        //input.focus();
        
       }
       //funcao que aciona a funcao removeClassList por tempo
       function parar(){

        setTimeout(removeClassList,5000)     //timeout de 5000mls
       }
       //funcao que remove o estado do button ativo
       function removeClassList(){

        btn.classList.remove("ativo")  
        btn.innerText = "Copiar"

       }
       

      
       

    

    
 

//funcao que gerencia a  criptografia
function criptografar() {

    let resultado = document.getElementById("resultado");       // guarda em uma variavel o local de inserção do input
    let collection = document.getElementsByClassName("output1");  // guarda em uma variavel o loca da interação 
    collection[0].style.visibility = "hidden";  //esconde os elementos de HTML

    const novoInputC = conversaoDeString();   //pegando o retorno da funcao e guardando
    
    if (novoInputC === undefined) {

        collection[0].style.visibility = "visible";
    }

     else { 

        // cria um text area para o input do cliente com CSS
         resultado.innerHTML = `<textarea  name= 'newOutput' class= 'newOutput' >${novoInputC}</textarea>`  

        let button = document.getElementsByClassName("container-button-copiar"); //variavel HTML
        button[0].style.visibility = "visible"; //altera o estado visivel para o button
    
    }


}


//criando a logica da criptografia e validacoes
function conversaoDeString() {

     //pega o valor do input
    let inputConversao = document.getElementById("input").value; 
    console.log(inputConversao)           

    //itera no arrays de strings do input
    for (let pos = 0; pos < inputConversao.length; pos++) {

        //validacoes para permitir apenas minúsculas 
        //** ESTUDAR REGEX **// -> Para validar melhor sem erros

        if (inputConversao[pos] === "E" || inputConversao[pos] === 'A' || inputConversao[pos] === "I" || inputConversao[pos] === "O" || inputConversao[pos] === "U") {

                return alert("Use apenas letras minúsculas")

          //validacoes para  não permitir caracteres especiais
        } else if (inputConversao[pos] === "<" || inputConversao[pos] === '>' || inputConversao[pos] === "&" || inputConversao[pos] === "&reg" || inputConversao[pos] === "&copy" || inputConversao[pos] === "&trade" || inputConversao[pos] === "&copy") {

                    return alert("Use apenas caracteres normais")

         //validacoes para  não permitir acento

        } else if  (inputConversao[pos] === "é" || inputConversao[pos] === 'á' || inputConversao[pos] === "í" || inputConversao[pos] === "ó" || inputConversao[pos] === "ú") {

                return alert ("Use apenas letras sem acento.")

         //Conversao da String -> criptografia

         } else if (inputConversao[pos] === "e" || inputConversao[pos] === 'a' || inputConversao[pos] === "i" || inputConversao[pos] === "o" || inputConversao[pos] === "u") {

            const criptografia = inputConversao.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

            console.log (criptografia);
            return criptografia.toLowerCase()   // passa tudo para minúscula

     
            
        }
        }

        }
        //funcao que gerencia a descriptografia
        function descriptografar() {

            let resultado = document.getElementById("resultado");       // guarda em uma variavel o local de inserção do input
        
            let collection = document.getElementsByClassName("output1");  // guarda em uma variavel o loca da interação 
            collection[0].style.visibility = "hidden";  //esconde os elementos de HTML
        
            const novoInputD = desconversaoDeString();   //pegando o retorno da funcao e guardando
            console.log(novoInputD)

            if (novoInputD === undefined) {
        
                collection[0].style.visibility = "visible";
            }
        
             else { 
        
                // cria um text area para o input do cliente com CSS
                 resultado.innerHTML = `<textarea  name= 'newOutput' class= 'newOutput' >${novoInputD}</textarea>`  
        
                let button = document.getElementsByClassName("container-button-copiar"); //variavel HTML
                button[0].style.visibility = "visible"; //altera o estado visivel para o button
            
            }
        
        
        }
        
        
        //funcao que implementa a logica de descriptografia
        function desconversaoDeString() {

            let inputDesconversao = document.getElementById("input").value;  
            
            console.log(inputDesconversao)

            for (let pos = 0; pos < inputDesconversao.length; pos++) {

                if (inputDesconversao[pos] === "e" || inputDesconversao[pos] === 'a' || inputDesconversao[pos] === "i" || inputDesconversao[pos] === "o" || inputDesconversao[pos] === "u") {

                 const descriptografia = inputDesconversao.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        
                    console.log (descriptografia);
                    return descriptografia.toLowerCase() 


                }

        }
    }
    
   
      
      