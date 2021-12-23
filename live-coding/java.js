// declaration des variable
var btn;
var output;
var nombre;
var nomberDeviner;
// saiser
btn = document.getElementById('btn');
output = document.getElementById('outputtext');
nombre = Math.floor(Math.random () * 100 );
// traitment
function play(){
    nomberDeviner = document.getElementById('userinput').value;
    if (nomberDeviner == nombre){
        output.innerHTML = 'bravo'
    }else{
        if (nomberDeviner < nombre){
            output.innerHTML = "nomber small"
        }
        else{
            output.innerHTML = "nombre big guy ndin d ymak"
        }
    }

};


    


       






