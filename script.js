function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result;
  
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      case "square":
        result = num1 * num1;
        break;
      case "cube":
        result = num1 * num1 * num1;
        break;
      default:
        result = "Invalid Operation";
    }
  
    document.getElementById("result").textContent = "Result:" + result;
  }

  function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "Result: ";
}