// This function clear all the values
function clearScreen() {
    document.getElementById("numInput").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("numInput").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("numInput").value;
    var q = eval(p);
    document.getElementById("numInput").value = q;
   }