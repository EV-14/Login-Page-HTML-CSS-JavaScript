function validarFormLogin ( form ) {
    //Expresion regular para Validar que el nombre, apellido y correo
    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 

    //Validamos el correo electronico
    var email = form.email;
    
    if (email.value === "") {
        alert("Debe proporcionar un Correo de Usuario Valido");
        email.focus();
        email.select();
        return false;
    }
    
    if (!expRegCorreo.exec(email.value)){
        alert("Debe proporcionar un Correo de Usuario Valido");
        email.focus();
        email.select();
        return false;
    }

    //Validamos el password
    var password = form.password;
    if (password.value === "" || password.value.length < 8) {
        alert("Debe proporcionar un password al menos de 8 caracteres");
        password.focus();
        password.select();
        return false;
        
    }
        
    if(!checkPassword(password.value)) {
        alert("La contraseña debe tener entre 8 y 16 caracteres, al menos un digito, al menos una minuscula y al menos una mayuscula. No puede tener otros simbolos");
        password.focus();
        password.select();
        return false;
    }

    //Formulario Validado
    alert("Bienvenido " + email.value);
    return true;
}

function validarFormRegister ( form ) {
    //Expresion regular para Validar que el nombre, apellido y correo
    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 

    //Validamos el nombre
    var nombre = form.usuario;
    
    if (nombre.value === "" || nombre.value === "Escribir Usuario") {
        alert("Debe proporcionar un nombre de Usuario Valido");
        nombre.focus();
        nombre.select();
        return false;
    }
    
    if (!expRegNombre.exec(nombre.value)){
        alert("Debe proporcionar un nombre de Usuario Valido que no contenga números");
        nombre.focus();
        nombre.select();
        return false;
    }

    //Validamos el correo electronico
    var email = form.email;
    
    if (email.value === "") {
        alert("Debe proporcionar un Correo de Usuario Valido");
        email.focus();
        email.select();
        return false;
    }
    
    if (!expRegCorreo.exec(email.value)){
        alert("Debe proporcionar un Correo de Usuario Valido");
        email.focus();
        email.select();
        return false;
    }
    
    //Validamos el password
    var password = form.password;
    if (password.value === "" || password.value.length < 8) {
        alert("Debe proporcionar un password al menos de 8 caracteres");
        password.focus();
        password.select();
        return false;
        
    }
        
    if(!checkPassword(password.value)) {
        alert("La contraseña debe tener entre 8 y 16 caracteres, al menos un digito, al menos una minuscula y al menos una mayuscula. No puede tener otros simbolos");
        password.focus();
        password.select();
        return false;
    }

    //Validamos el password2
    var password2 = form.password2;
    if (password.value !== password2.value) {
        alert("Las contraseñas no coinciden, Revisa de nuevo");
        password.focus();
        password.select();
        return false;
    }

    //Formulario Validado
    alert("Formulario Valido, enviando datos...");
    return true;
}


function checkPassword( value ) {
    var expRegPassword=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; 
    if(expRegPassword.test(value)){
        //alert(value+" es Valida");
        return true;        
    }else{
       //alert(value+" NO es valida");
        return false;        
    }   
}


function infoNombre ( ) {
    alert("Campo Nombre: No acepta valores numericos");
}

function infoEmail ( ) {
    alert("Campo Email: No acepta correos que no contegan el @");
}

function infoPassword ( ) {
    alert("La contraseña debe tener entre 8 y 16 caracteres, al menos un digito, al menos una minuscula y al menos una mayuscula. No puede tener otros simbolos");
}