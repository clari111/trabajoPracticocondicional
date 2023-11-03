/*1*/
if ((nombre == 'Santino') || (nombre == 'Nahuel'))
{
    alert ('Bienvenido, desaprobado')
} else{
    alert ('Bienvenido alumn@')
}


/*2*/
if (edad >= 18)
{ alert ('sos mayor de edad ')
}else{
    alert ('sos menor de edad')
}


/*3*/

if ((edadPersona >=6) && ( edadPersona <= 11))
{
    alert ('Sos un niño')
} else if 
    ((edadPersona >=12) && ( edadPersona <= 18))
    {
        alert ('Sos adolescente')
    } else if
    ((edadPersona >=19) && ( edadPersona <= 26))
    {
        alert ('sos un joven')
    } else if
    ((edadPersona >= 27) && ( edadPersona <= 59))
    {
        alert ('Sos una adulto')
    } else if

   (edadPersona >=60) 
   {
       alert ('Eres un anciano')
   }

   /*4*/

function diasLaborables (diaDelaSemana){
if (diaDelaSemana == Domingo)
{
return 'Es dia no laboral'
} else{ 
    return 'Es fin de semana'
}
}


let esLaborable = prompt ('Ingresa el dia de la semana')
alert (diasLaborables(esLaborable))

/*5*/
let contraseña = prompt ('Ingresar contraseña')

if (contraseña == 'secreto')
                   {
    alert ('Acceso concedido')
    
                   }else{
    alert ('acceso denegado')
}

/*6*/

function multiplo (numero)
{ if (numero / 5 == 0)
    {
        return 'No es multiplo'
    }else{
        return numero
    }
}

/*7*/

function calculoDescuento (edad, precio)
{ if (edad > 65)
{return (precio * 90) / 100

}else{
    return numero
}
}

/*8*/
function categoriaNotas (categoriaNotas)
{
    if (nota < 60){
        return 'EP'
    }else if  (nota <80){
        return 'S'
    }else{
        return 'MS'
    }
}

/*9*/
let dia =  prompt ('Ingresar numero')
function numerosDeLasemana (dia)
{
    if (dia == 1)
    {
        return 'Lunes'
    }else if (dia == 2){
        return 'Martes'
    }else if (dia == 3){
        return 'Miercoles'
    }else if (dia == 4){
        return ' Jueves'
    }else if (dia == 5){
        return 'Viernes'
    }else if (dia== 6){
        return 'Sabado'
    }else if (dia == 7){
        return 'Domingo'
    }
}


/*10*/

function añoBisiesto (año)
{
    if ((año / 400 == 0) || (año /4 == 0) && (año / 100 > 0))
    
{ 
    return 'Es año bisiesto'
}else{
    return 'No es año bisisesto'
}


}




/*11*/


/*12*/

let Edad= prompt("Ponga su año de nacimiento")
let añoactual= 2023
if(edad ){
    alert("usted tiene " + edad - añoactual)
}else{

}













 /*DOM*/
let titulo = document.querySelector()
/*modificar texto del elemento h1*/

localStorage.innerText = 'Hola'

let imagen= document.querySelector('.imagen')
let botton= document.querySelector('#cambiarImagen')
imagen.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Frecetas%2Fplatos-principales%2Fpizza-napolitana_7_obCkV1o-j.html&psig=AOvVaw02vA2ZFOGCgpNBwB6Su7RK&ust=1699099804967000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDe8tbmp4IDFQAAAAAdAAAAABAD'

botton.onclick = function (){
    if (verificar == false){
        titulo.innerText ='Hola'
        imagen.src= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laespanolaaceites.com%2Frecetas%2Fpizza-con-chorizo-jamon-y-queso%2F&psig=AOvVaw02vA2ZFOGCgpNBwB6Su7RK&ust=1699099804967000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDe8tbmp4IDFQAAAAAdAAAAABAI'
    verificar = true
    }else{
        titulo.innerText = 'DOM'
imagen.src =' https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Frecetas%2Fplatos-principales%2Fpizza-napolitana_7_obCkV1o-j.html&psig=AOvVaw02vA2ZFOGCgpNBwB6Su7RK&ust=1699099804967000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDe8tbmp4IDFQAAAAAdAAAAABAD'
    }
    
}