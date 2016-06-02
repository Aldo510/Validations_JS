$(document).ready(function() {
  // Este código corre después de que `document` fue cargado(loaded) 
  // completamente. 
  // Esto garantiza que si amarramos(bind) una función a un elemento 
  // de HTML este exista ya en la página. 
  
});

//Funcion para validar el email
function validateEmail(email) {
  //Regexp para comparar con lo que ingrese el usuario
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Regresa true o false depende de si se cumple la regexp
  return re.test(email);
}

//funcion para validar la contraseña
function validatePassword(pass){
  //Regex para la contraseña
  //(?=.*\d)                //should contain at least one digit
  //(?=.*[a-z])             //should contain at least one lower case
  //(?=.*[A-Z])             //should contain at least one upper case
  //[a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters
  var regex = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  //regresar true o false si la contraseña del usuario cumple la regexp
  return regex.test(pass);
}

//funcion para validar el password y el email
function validate() {
  //poner lo que tenga el contenedor result vacio
  $("#result").text("");
  //Guardar el valor del campo email
  var email = $("#email").val();
  //Llamar a la funcion validateEmail para comparar el email
  if (validateEmail(email)) {
    //Si regresa true pone que es valida en color verde
    $("#result").text(email + " is valid :)");
    $("#result").css("color", "green");
    //Si regresa false
  } else {
    //Pone que no es valido en color rojo
    $("#result").text(email + " , is not valid, should write a valid email address :(");
    $("#result").css("color", "red");
  }
  //Guardar el valor del contraseña
  var pass = $("#pass").val();
  //Llamar la funcion validatePassword 
  if (validatePassword(pass)){
    //si regreso true poner que esta bien en color verde
    $("#result2").text("Your pass is good");
    $("#result2").css("color", "green");
    //Si esta mal poner que es incorrecta en color rojo 
  }else{
    //Decir que caracteres debería tener la password
    $("#result2").text("Your password should have at least one UpperCase, and one number and at leat 8 characters")
    $("#result2").css("color", "red");
  }
  return false;
}
//Combinar el formulario cuando le de clic con la funcion validate
$("form").bind("submit", validate);


