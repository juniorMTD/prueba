       // Ejercicio Nª01 Hallar el perimetro de un triangulo (variables estaticas)

        // let num1,num2,num3;
        // num1=2;
        // num2=5;
        // num3=5;
        // perimetro=num1+num2+num3;
        // alert(`El periumtro del teriangulo x es ${perimetro}`);


        // Ejercicio Nª02: Hallar el area de un trinagulo notable de  53º
        // let a,b;
        // a=4;
        // b=3;
        // areatriangulo=(a*b)/2;
        // document.write("El area del tranigulo notable de 53º es : " + areatriangulo);

        // Ejercicio Nª03: Escribir tu nombre y mostrar en un mensaje de alerta


        // let nombre;
        // dato=window.prompt("Introduce tu nombre","0");
        // document.write(dato);

        // Ejercicio Nª 04: Hallar el perimetro de un triangulo (variables dinamicos)

        // let num1,num2,num3;
        // dato1=window.prompt("Ingresa el primer numero","");
        // num1=parseInt(dato1);
        // dato2=window.prompt("Ingresa el segundo numero","");
        // num2=parseInt(dato2);
        // dato3=window.prompt("Ingresa el tercero numero","");
        // num3=parseInt(dato3);
        // perimetro=num1+num2+num3;
        // document.write("El perimetro del <br> tringulo de lado " +num1+" del lado "+num2 + "del lado " + num3+" el perimtro es : "+perimetro )

        // Ejercicio Nª 05: Deseo saber tu nombre completo, tu edad, fecha de nacimiento, 
        //tu color favorito, estado civil

        // let edad, nombre,color,estado,fec_nac;

        // dato1=window.prompt("Ingresa tu nombre","");
        // nombre=(dato1);
        // dato2=window.prompt("Ingresa tu edad","");
        // edad=parseInt(dato2);
        // dato3=window.prompt("Ingresa tu fecha de nacimiento","");
        // fec_nac=(dato3);
        // dato4=window.prompt("Ingresa tu color","");
        // color=(dato4);
        // dato5=window.prompt("Ingresa tu estado civil","");
        // estado=(dato5);
        // document.writeln("Mi nombres es: "+nombre+ "<br> Mi fecha de nacimiento es: "+fec_nac+"<br> Mi color favorito es: "+color+"<br> Mi estado civil es :"+estado ); 
        // document.write("<br> Mi edad es: "+edad)

        //ejercicio N° 06: Se desea saber de dos numeros que se ingresa cual es el mayor
        // y cual es el menor

        // let num1,num2;
        // dato1=window.prompt("Ingresa el primer numero","");
        // num1=parseInt(dato1);
        // dato2=window.prompt("Ingresa el segundo numero","");
        // num2=parseInt(dato2);


        // if(num1>num2){
        //     result="Primer numero ingresado";
        // }else{
        //     result="Segundo numero ingresado";
        // }
        // document.write("El mayor es el "+result);




        // Ejercicio N° 07: Ingresar 4 notas de la alumna triana la cual deseo calcular si la alumna
        // esta aprobada o desaprobada (npromedio mayor de 13 aprobada y menor desaprobada)

        // let a, b, c, d;

        // dato1 = window.prompt("Ingresa el primer numero", "");
        // a = parseInt(dato1);
        // dato2 = window.prompt("Ingresa el segundo numero", "");
        // b = parseInt(dato2);
        // dato3 = window.prompt("Ingresa el Tercer numero", "");
        // c = parseInt(dato3);
        // dato4 = window.prompt("Ingresa el Cuarto numero", "");
        // d = parseInt(dato4);

        // promedio = (a + b + c + d) / 4;



        // if (a <= 20 && b <= 20 && c <= 20 && d <= 20) {
        //     if (promedio > 12) {
        //         result = "Apropbado";
        //     } else {
        //         result = "Desaprobado";
        //     }

        //     document.write("el alumno tiene un promedio de: " + promedio + "la cual el alumno esta:" + result);

        // }else{
        //     document.write("alguna nota no existe");
        // }

        // Ejercicio: Juego de dado de 6 lados la cual cuando tu tiras el dado si te sale un numero mayor a 4 ganas
        // y cuando sale menor a 4 pierdes
        // let suerte = (Math.random() * 6);
        //     let dado = parseInt(suerte) + 1;

        //     let boton = document.getElementById("jugar")

        //     if (dado > 3) {
        //         boton.innerHTML = "has ganado";
        //     } else {
        //         boton.innerHTML = "has perdido ";
        //     }
        // 


        ////////************* FUNCIONES **********


        function minombrees() {
            document.write("morales tarazona junior")
            
        }

        function calcular(numero){
            let caculo =numero* numero;
            document.write(`<p> resultado= ${calculo} </p>`)
        }