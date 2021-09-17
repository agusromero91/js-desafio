    
    let edad = Number(prompt("Ingrese su edad para saber a qué generación corresponde: "));
    
    // Baby Boomers (nacidos entre 1945 y 1964)
    // Generación X (nacidos entre 1965 y 1981)
    // Generación Y o Millennials (nacidos entre 1982 y 1994)
    // Generación Z o Centennials (nacidos a partir de 1995 y hasta el presente)

    if(edad <= "1964" && edad >= "1945"){
        console.log("Estas dentro de la Generación Baby Boomer");
        }else if (edad <= "1981" && edad >= "1965"){
            console.log("Estas dentro de la Generación X");
        }else if(edad <= "1994" && edad >= "1982"){
            console.log("Estas dentro de la Generación Y o Millennials");
        }else if(edad > "1995"){
            console.log("Estas dentro de la Generación Z o Centennials");
        }else{
            console.log("El valor igresado no esta dentro de una generación definida");
        }
       