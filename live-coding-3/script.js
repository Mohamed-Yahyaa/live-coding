// Présentation
let aString, bString;
let calculatrice = new CalculatricePoo();

function OnClickNumber(number){
    if(calculatrice.a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    } 
    else {
        if(bString == undefined) bString = '';
        bString += number;
    } 
    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("display");
    afficheur.value = "";
    
    if(calculatrice.a != undefined && calculatrice.b != undefined && calculatrice.operation != undefined){

        afficheur.value = number;
    }else{
        if(aString != undefined)
        afficheur.value += aString 
        if(calculatrice.operation != undefined)
            afficheur.value += calculatrice.operation     
        if(bString != undefined)
            afficheur.value += bString 

        }
 
   
}

function OnClickOperation(operationParam){
    if(calculatrice.operation == undefined){
        calculatrice.operation = operationParam;
        calculatrice.a = parseFloat(aString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + calculatrice.operation);
    }
}

function Equal(){
    calculatrice.a = parseFloat(aString);
    calculatrice.b = parseFloat(bString);
    calculatrice.Calculer();
    Afficher(calculatrice.solution);
}

function Init(){
    calculatrice.Init();
    aString = undefined;
    bString = undefined;
    let afficheur = document.getElementById("display");
    afficheur.value = "";
}