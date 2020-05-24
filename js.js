function Calcular() {

  
    var operacao = document.getElementById('operacao').value

    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

      num1 = parseFloat(num1)
      num2 = parseFloat(num2)
    if( num1 == "" || num1 == null) {

   alert('Digite um número válido')

   return false
    }
    if( num2 == "" || num2 == null) {
   
    alert('Digite um número válido')

    return false
    }


        switch(operacao){

         case "1":
            resultado = num1 + num2
           break;

        case "2":
            resultado =  num1 - num2
           break;

        case "3":
            resultado = num1 * num2
           break;
 
        case "4":
            resultado = num1 / num2
           break;

       default:

    alert('Selecione uma das opções')


      return false;
    }

    document.getElementById('resultado').value = resultado
}