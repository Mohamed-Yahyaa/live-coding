var aNumber ;
var bNumber ;
var a ;
var b ;
var operation ;
var totale ;


function OnclickNumber(number){
    if(a == undefined){
        if(aNumber == undefined)aNumber = ''
        aNumber += number
    }else {
        if (bNumber == undefined)bNumber =''
        bNumber += number
    }
    Affiche()
}

function Affiche(number){
    let Affiche = document.getElementById("display");
    Affiche.value = "";
    if(a != undefined && b != undefined && operation != undefined){
        Affiche.value = number 
    }else {
        if(aNumber != undefined){
            Affiche.value += aNumber
        }
        if(operation != undefined){
            Affiche.value += operation
        }
        if(bNumber != undefined){
            Affiche.value += bNumber
        }
    }
}

function OnclickOperation(operationPara){
    if(operation == undefined){
        operation = operationPara
        a = parseFloat(aNumber)
    
    }
    Affiche()
}

function Equal(){
    a = parseFloat(aNumber)
    b = parseFloat(bNumber)
    totale = some(a,b,operation)

    Affiche(totale)

}
 
function some(a,b,operation){
    let total = undefined;
    switch(operation){
        case '+' :
            total = a + b 
            break;
            case '-' :
                total = a - b
                break;
                default :
                break;
            
    }
    return total


}