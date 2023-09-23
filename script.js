function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // convert cm to m
    var bmi = weight / (height * height); //bmi cal.
    document.getElementById("result").innerHTML = bmi.toFixed(2);
    if((document.getElementById("result").innerHTML = bmi.toFixed(2))<18.5){
        document.getElementById("comment").innerHTML ="Severe weight loss";
    }else if((document.getElementById("result").innerHTML = bmi.toFixed(2))>18.5 && (document.getElementById("result").innerHTML = bmi.toFixed(2))<25){
        document.getElementById("comment").innerHTML ="Ideal weight";
    }else if((document.getElementById("result").innerHTML = bmi.toFixed(2))>25 && (document.getElementById("result").innerHTML = bmi.toFixed(2))<30){
        document.getElementById("comment").innerHTML ="over weight";
  }else if((document.getElementById("result").innerHTML = bmi.toFixed(2))>30){
    document.getElementById("comment").innerHTML ="Extreme obesity";
}
}