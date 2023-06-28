
function showalert(){
    alert('hola, esta es una alerta desde javaScript');
    console.log('hola mundo');
    suma(2,5);
    
};

function suma(valor1, valor2){
    var valor1; 
    var resultado;
    var valor2;
    resultado = valor1 + valor2;
    return console.log(resultado);
};

/*const mayor = 18;
if (mayor >= 18) {
    console.log("es mayor");
}else if(mayor>18&&mayor<25){
    console.log("es un adulto joven");
}else{
    console.log("es menor");
}*/

const form = document.getElementById("miform");

function validateEmail(email){
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)    
};

function validateForm(){
    const emailingresar = document.getElementById('email');
    const email = emailingresar.value;

    if(!validateEmail(email)){
        alert('por favor ingrese un correo electronico valido.');
    
    }else {
        alert('correo electronico enviado correctamente.');
    }    
};

if(form){
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});





