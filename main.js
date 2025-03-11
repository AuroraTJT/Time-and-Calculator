function calculator(){
    var a = parseInt (document.getElementById('num1').value);
    var b =parseInt (document.getElementById('num2').value);
    var c =parseInt(document.getElementById('num3').value);
    var total= a/b-c;
    document.getElementById('result').innerText=total;

}
   
