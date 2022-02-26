window.onload = iniciar; //ejecuta la función iniciar cuando se haya cargado toda la pagina web
function iniciar(){
    var Calcular = document.getElementById("Calcular");
    Calcular.addEventListener("click",clickCalcular);
}

function clickCalcular (){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var imc = (weight / (height^2)).toFixed(2);
    if (imc<18.4){
        document.body.innerHTML= "<h3>Tu indice de masa corporal es <strong>"+imc+"</strong> lo cual indica que estas bajo de peso</h3>";
        
      }
    else if (imc>=18.5 && imc<24.9){
        document.body.innerHTML="<h3>Tu indice de masa corporal es <strong>"+imc+"</strong> lo cual indica que estas normal</h3>";
      }
    else if (imc>=25 && imc<29.9){
        document.body.innerHTML="<h3>Tu indice de masa corporal es <strong>"+imc+"</strong> lo cual indica que estas en sobrepeso</h3>";
      }
    else
      {
        document.body.innerHTML="<h3>Tu indice de masa corporal es <strong>"+imc+"</strong> lo cual indica que estas en Obesidad</h3>";
}}
