function calcSum() {
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var sum = x + y;
    const result = document.getElementById("result");
    result.value = sum;
}