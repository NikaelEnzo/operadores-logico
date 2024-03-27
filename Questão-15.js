/*
15. Explique como a ordem de avaliação dos operadores lógicos afeta o 
resultado de uma expressão em JavaScript. 
*/

/*
    A ordem de avaliação é pre definida, é ira definir a ordem de resolução de uma operação logica podendo mudar o resultado, como por exenplo:
    false && (true || true) = false    por quer 'true ou true' resulta em 'true' mas 'false e true' resulta em 'false'
   (false && true) || true  = true     enquanto 'false e true' resulta em 'false' e 'false ou true' resulta em 'true'
*/