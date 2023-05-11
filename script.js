let submitButton = document.querySelector(".submit");
let resultDiv = document.querySelector(".result");


let button = document.querySelector(".ClickMe");

button.onclick = function() {
    let Input1 = document.querySelector(".Input1").value;
    console.log(Input1);
    let Input2 = document.querySelector(".Input2").value;
    console.log(Input1);
    let result1 = "Hot Chocolate";
    let result2 = "Iced Caramel Macchiato";
    let result3 = "Strawberry Acai Refresher";
    let result4 = "Double Chocolaty Chip Crème Frappuccino";

    if (Input1 <= 5 && Input2 === "Introvert") {
        resultDiv.innerHTML = result1;
        let hotchocolate = document.querySelector(".HotChocolate");
        hotchocolate.style.display = "block";
    } else if (Input1 > 5 && Input2 === "Introvert") {
        resultDiv.innerHTML = result2;
        let icedcaramelmacchiato = document.querySelector(".IcedCaramelMacchiato");
        icedcaramelmacchiato.style.display = "block";
    }
    else if (Input1 <= 5 && Input2 === "Extrovert") {
        resultDiv.innerHTML = result3;
        let strawberryacairefresher = document.querySelector(".StrawberryAcaiRefresher");
        strawberryacairefresher.style.display = "block";
        
    } else if (Input1 > 5 && Input2 === "Extrovert") {
        resultDiv.innerHTML = result4;
        let doublechocolatychipcremefrappuccino = document.querySelector(".DoubleChocolatyChipCremeFrappuccino");
        doublechocolatychipcremefrappuccino.style.display = "block";
    }
    else{
    resultDiv.innerHTML="Try Again";
    }

};