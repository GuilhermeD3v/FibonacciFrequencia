function fibonacciFreq(entrada){
let penultimo = 0, ultimo = 1;
let numero, entrada;

  if(entrada <= 2)
   numero = entrada --;
  else{
   count = 3;
   while(count <= entrada){
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;
    count++;
        }
    }
}