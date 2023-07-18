var SpeechRecognition = window.webkitSpeechRecognition; // se va a crear una variable que contenga la API pra convertir nuestra voz a texto.
 
var recognition = new SpeechRecognition();// se va a crear una variable que contenga la converaion de voz a texto.



var Textbox = document.getElementById("textbox");// se crea la variable textbox que contenga el textarea de html.


function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}//va a hacer que textbox este vacio y va a inicializar la API
 
recognition.onresult = function(event) {//contiene toda tus voz u resultados, se mandan como parametros al evento para darnos un resultado.


 console.log(event);


var Content = event.results[0][0].transcript;//event contiene todos los resutados de la API, event.results es el arreglo 
//que contiene tu voz convertida en texto, es de cir ya lo transcribio


    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="Toma mi selfie")
      {
        console.log("tomando selfie --- ");
        speak();
      }
}
//la variable text box va a mostrar la variable content, content es lo que coontiene los resulados en texto.
//consologeamos
//SI content contiene el texto toma mi selfie, en la consola se va a mostrar tomando selfie y mandas a llamar la funcion de speak




function speak(){
    var synth = window.speechSynthesis;


    speak_data = "Tomando tu Selfie en 5 segundos";


    var utterThis = new SpeechSynthesisUtterance(speak_data);


    synth.speak(utterThis);


    Webcam.attach(camera);


    setTimeout(function(){
        take_selfie()
        save()
    },5000)



}
// se crea la funcion speak, que va a contener la variable synth
//Y synth contiene la API que le texto lo convierte a voz
//se crea speak data que contiene tomando tu selfie en 5 segundos
//se crea la varibe de UtterThis que contiene la funcion que convertira el texto a voz
//a synth se le agrega speak es para que tu computadora produzca el sonido
//le damos el acceso a la camara
camera = document.getElementById("camara");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
//se crea una variable que contenga camera
//a webcam se le agregan los siguientes atributos, ancho 360 altura 250
//cambiar el formato de a imagen a jpeg y que la cualidad se de 90
function take_selfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save(){

  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}