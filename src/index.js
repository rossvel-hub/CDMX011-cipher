/*
Aqui va la manipulacion del DOM (html)*/
import cipher from './cipher.js';

/*Obtenemos el elemento por su id, es decir el boton de "CIFRAR".
despues se le agrega un listener para cuando se le un click al boton*/ 
document.getElementById("btnCifrar").addEventListener("click", function(){
    const text= document.getElementById("inputCifrar").value;
    const offset=document.getElementById("offsetCifrar").value;
    const mensajeCifrado = cipher.encode(offset,text);
    
    //Mostrar "Mensaje cifrado"
    document.getElementById("inputMensajeCifrado").value = mensajeCifrado;
    document.getElementById("leyendaUsoCifrar").innerHTML = "<p>Gracias por usar nuestro cipher</p>";

    //limpiar valores
    document.getElementById("inputCifrar").value = "";
    document.getElementById("offsetCifrar").value = "";

})


/*Obtenemos el elemento por su id, es decir el boton de "DESCIFRAR".
despues se le agrega un listener para cuando se le un click al boton*/ 
document.getElementById("btnDescifrar").addEventListener("click", function(){
    const text= document.getElementById("inputDescifrar").value;
    const offset=document.getElementById("offsetDescifrar").value;
    const mensajeDescifrado = cipher.decode(offset,text);
    
    //Mostrar mensaje cifrado
    document.getElementById("inputMensajeDescifrado").value = mensajeDescifrado;
    document.getElementById("leyendaUsoDescifrar").innerHTML = "<p>Gracias por usar nuestro Cipher</p>";

    //limpiar valores
    document.getElementById("inputDescifrar").value = "";
    document.getElementById("offsetDescifrar").value = "";
    

})

//codigo de los tabs
document.getElementById("tabCifrar").addEventListener("click", function(e){
    document.getElementById("divDescifrar").style.display = "none";
    document.getElementById("divCifrar").style.display = "block";
    document.getElementById("tabDescifrar").classList.remove("active");
    e.currentTarget.className += " active"
    document.getElementById("leyendaUsoCifrar").innerHTML = "";
    }
); 

document.getElementById("tabDescifrar").addEventListener("click", function(e){
    document.getElementById("divCifrar").style.display = "none";
    document.getElementById("divDescifrar").style.display = "block";
    document.getElementById("tabCifrar").classList.remove("active");
    e.currentTarget.className += " active"
    document.getElementById("leyendaUsoDescifrar").innerHTML = "";

    }

); 




