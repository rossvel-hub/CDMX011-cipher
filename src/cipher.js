//aqui va la logica
const cipher = {
  // ...
  "encode":function(offset,text){
    //console.log(`recibi el ofset de ${offset} y el texto de ${text}`)

    /*validar  el numero de parametros al pasarlos que sean 2 ()
    if(arguments.length !== 2) {
      new TypeError();
    }
    else if(arguments[0] == 0){
      new TypeError();
    }*/

    /*validar que los campos no esten vacios
    if (text == "" || offset == "") {
      return false;
    }*/

    /*validar que "mensaje" sea una cadena de texto y no un numero
    if (text !== ""){
      return false;
    }*/

    //convertir una cadena a un numero, OFFSET
    offset = parseInt(offset);

    // Conversion de texto "Mensaje" a mayusculas
    text = text.toUpperCase().trim();
    //console.log(text.toUpperCase());

    //ciclo for para obtener cada caracter del "MENSAJE"
    let mensajeCifrado = "";
    for (let i = 0; i <= text.length-1; i++ ) {
      //condicional if- else para detectar espacios vacios entre las palabras del mensaje y no realizar ninguna conversion a ascci.
     if(text.charAt(i) !== " "){
          //convertir el cada letra del mensaje en codigo ASCII
          let ascii = text.charCodeAt(i);
          
          //Formula para obtener posicion
          //(x - 65 + n ) % 26 + 65;
          let posicion = (ascii - 65 + offset ) % 26 + 65;

          //Obtener desde el codigo ASCII el "MENSAJE DESCIFRADO"
          mensajeCifrado += String.fromCharCode(posicion);
        }
        else{
          mensajeCifrado += text.charAt(i);
        }    
    }

    return mensajeCifrado;
  },

  "decode":function(offset,text){
    //console.log(decode);

    //validar que los campos no esten vacios
    if (text == "" || offset == "") {
      return false;
    }
    //convertir una cadena a un numero, OFFSET
    offset = parseInt(offset);

    // Conversion de texto "Mensaje" a mayusculas
    text = text.toUpperCase().trim();
    
    //ciclo for para obtener cada caracter del "MENSAJE CIFRADO"
    let mensajeDescifrado = "";
    for (let i = 0; i <= text.length-1; i++ ) {
      if(text.charAt(i) !== " "){
        //convertir el cada letra del mensaje en codigo ASCII
        let ascii = text.charCodeAt(i);
        
        //RESTAR EL DESPLAZAMIENTO A CADA CARACTER
        //Formula para obtener posicion
        //(x - 65 +(-n) % 26 + 65;
        let posicion = (ascii + 65 - offset) % 26 + 65;

        //Obtener desde el codigo ASCII el "MENSAJE DESCIFRADO"
        mensajeDescifrado += String.fromCharCode(posicion);
      }
      else{
        mensajeDescifrado += text.charAt(i);
      }
    }
    
    //Hacker edition
    //cifrado de minusculas
    //String.fromCharCode((letra.charCodeAt(0) - 97 + 33) % 26 + 97)


    return mensajeDescifrado;
  },
};

export default cipher;


