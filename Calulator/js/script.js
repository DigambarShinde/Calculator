var number;
var lastDigit;
var firstDigit;
var operator;

var result;

//To Ristrict Numbers key
function toggleNumbers(status) {
   document.getElementById("num0").disabled = status;
   document.getElementById("num1").disabled = status;
   document.getElementById("num2").disabled = status;
   document.getElementById("num3").disabled = status;
   document.getElementById("num4").disabled = status;
   document.getElementById("num5").disabled = status;
   document.getElementById("num6").disabled = status;
   document.getElementById("num7").disabled = status;
   document.getElementById("num8").disabled = status;
   document.getElementById("num9").disabled = status;
}

//Limit for input 
function validateInputString() {
   var firstDigitCounter = 0;
   var secondDigitCounter = 0;
   var string = document.getElementById("input-text").value;
   var operator;
   if (string.includes("+")) {
      operator = "+";
   } else if (string.includes("-")) {
      operator = "-";
   } else if (string.includes("*")) {
      operator = "*";
   } else if (string.includes("/")) {
      operator = "/";
   } else if (string.includes("%")) {
      operator = "%";
   } else {
      operator = "";
   }

   if (operator == "") {
      resetOperators();
      firstDigitCounter = string.length;
      if (firstDigitCounter >= 15) {
         toggleNumbers(true);
      }
   } else {
      toggleNumbers(false);
      secondDigitCounter = string.split(operator)[1].length;
      if (secondDigitCounter >= 15) {
         toggleNumbers(true);
      }
   }
}

//display() for Accepting Number and performing manipulation on it.
function display(number) {    //On Every Click 1st This method will get Call

   if (number != "=") {
      var string = document.getElementById("input-text").value;

      //this will Check if 1st character may be any operator or blank then stop excuition
      if (string == undefined || string == "" && (number == "0" || number == ("+") || number == ("-") || number == ("*") || number == ("/") || number == ("%") || number == ("√"))) {
         return;
      }
      else if (string.length == 1 && string == ".") {
         document.getElementById("result").innerHTML="Enter Valid Number!";
         $("#result").css("color","red");
         disableOperators();
         document.getElementById("dotbtn").disabled = true;
      }
      else{$("#result").css("color","#b9e8f1");} if (result != undefined && result != "" && string != "") {
         document.getElementById("input-text").value = result;
         result = "";
         $("#result").text("");
      }
      document.getElementById("input-text").value = document.getElementById("input-text").value + number;
      validateInputString();
   }
}

//Perfoming Operation 
function compute() {

   number = document.getElementById("input-text").value;
   var stringNumber = document.getElementById("input-text").value;
   // console.log(stringNumber);

   for (let i = 0; i < stringNumber.length; i++) {
      if (stringNumber.charAt(i) == "+") {
         operator = stringNumber.charAt(i);
      } else if (stringNumber.charAt(i) == "-") {
         operator = stringNumber.charAt(i);
      } else if (stringNumber.charAt(i) == "*") {
         operator = stringNumber.charAt(i);
      } else if (stringNumber.charAt(i) == "/") {
         operator = stringNumber.charAt(i);
      } else if (stringNumber.charAt(i) == "√") {
         operator = stringNumber.charAt(i);
      } else if (stringNumber.charAt(i) == "%") {
         operator = stringNumber.charAt(i);
      } else if (stringNumber.charAt(i) == ".") {
         dotDisable();
      }
   }

   if (operator == "+") {
      lastDigit = parseFloat(stringNumber.split('+')[1]);
      firstDigit = parseFloat(stringNumber.split('+'));

   } else if (operator == "-") {
      lastDigit = parseFloat(stringNumber.split('-')[1]);
      firstDigit = parseFloat(stringNumber.split('-'));

   } else if (operator == "*") {
      lastDigit = parseFloat(stringNumber.split('*')[1]);
      firstDigit = parseFloat(stringNumber.split('*'));
   } else if (operator == "/") {
      lastDigit = parseFloat(stringNumber.split('/')[1]);
      firstDigit = parseFloat(stringNumber.split('/'));
   } else if (operator == "√") {
      firstDigit = parseFloat(stringNumber.split('√'));
   } else if (operator == "%") {
      firstDigit = parseFloat(stringNumber.split('%'));
      lastDigit = parseFloat(stringNumber.split('%')[1]);
   }


   const prev = parseFloat(this.firstDigit)
   const current = parseFloat(this.lastDigit)

   switch (operator) {
      case '+':
         $("#result").html(prev + current);
         $("#result").css('color', 'black');
         result = prev + current;
         break
      case '-':
         $("#result").html(prev - current);
         $("#result").css('color', 'black');
         result = prev - current;
         break
      case '*':
         $("#result").html(prev * current);
         $("#result").css('color', 'black');
         result = prev * current;
         break
      case '/':
         $("#result").html(prev / current);
         $("#result").css('color', 'black');
         result = prev / current;
         break
      case '%':
         $("#result").html(lastDigit * (firstDigit / 100));
         $("#result").css('color', 'black');
         result = lastDigit * (firstDigit / 100);
         break
      case '√':
         $("#result").html(Math.sqrt(prev));
         $("#result").css('color', 'black');
         result = Math.sqrt(prev);
         break
      default:
         return
   }
}

// To Disable .
function dotDisable() {
   const inputString = document.getElementById("input-text").value;

   var count = 0;
   for (let i = 0; i < inputString.length; i++) {
      var character = inputString.charAt(i);

      if (character == ".") {
         count++;
      }
      if (count >= 2) {
         disableDot(true);
         return true;
      } else {
         disableDot(false);
      }
   }
   return false;
}

//BackSpace Button Functionallity
function backspace() {
   var value = document.getElementById("input-text").value;
   var backedSpacedValue = document.getElementById("input-text").value = value.substring(0, value.length - 1);

   document.getElementById("input-text").value = "";
   if (!backedSpacedValue.includes("+") && !backedSpacedValue.includes("-") && !backedSpacedValue.includes("/") && !backedSpacedValue.includes("*")) {
      resetOperators();
   }

   if (document.getElementById("input-text").value = "" == "") {
      reset();
   }

   dotDisable();
   toggleNumbers(false);
   display(backedSpacedValue);
}

//For Reset 
function reset() {
   document.getElementById("input-text").value = "";
   document.getElementById("result").innerHTML = "";
   $("#result").css("color", "#b9e8f1");
   resetOperators();
   toggleNumbers(false);
   result = "";

}

//For Enable operator
function resetOperators() {
   document.getElementById('addbtn').disabled = false;
   document.getElementById('subbtn').disabled = false;
   document.getElementById('mulbtn').disabled = false;
   document.getElementById('sqrbtn').disabled = false;
   document.getElementById('dividbtn').disabled = false;
   document.getElementById('percentbtn').disabled = false;
   document.getElementById("dotbtn").disabled = false;
   document.getElementById('num0').disabled = false;

}

//For Disable Operators
function disableOperators() {
   document.getElementById('addbtn').disabled = true;
   document.getElementById('subbtn').disabled = true;
   document.getElementById('mulbtn').disabled = true;
   document.getElementById('sqrbtn').disabled = true;
   document.getElementById('dividbtn').disabled = true;
   document.getElementById('percentbtn').disabled = true;
   document.getElementById("dotbtn").disabled = true;
}

//For Number Keys functionality
$(document).keydown(function (event) {
   var key = event.keyCode;
   if (key == 96) {
      display(0);
   } else if (key == 97) {
      display(1);
   } else if (key == 98) {
      display(2);
   } else if (key == 99) {
      display(3);
   } else if (key == 100) {
      display(4);
   } else if (key == 101) {
      display(5);
   } else if (key == 102) {
      display(6);
   } else if (key == 103) {
      display(7);
   } else if (key == 104) {
      display(8);
   } else if (key == 105) {
      display(9);
   } else if (key == 106) {
      const btn = document.getElementById("mulbtn");
      if (!btn.disabled) {
         disableOperators();
         display("*");
      }
   } else if (key == 107) {
      const btn = document.getElementById("addbtn");
      if (!btn.disabled) {
         disableOperators();
         display("+");
      }

   } else if (key == 109) {
      const btn = document.getElementById("subbtn");
      if (!btn.disabled) {
         disableOperators();
         display("-");
      }
   } else if (key == 111) {
      const btn = document.getElementById("dividbtn");
      if (!btn.disabled) {
         disableOperators();
         display("/");
      }
   } else if (key == 110) {
      if (!dotDisable()) {
         display(".");
         disableOperators();
      }
   } else if (key == 8) {
      backspace();
   } if (key == 13) {
      const btn= document.getElementById("input-text").value;
      if (!btn == "") {
      compute();
      $("#result").css("color", "black");
      resetOperators();
      toggleNumbers(false);
      }
   }
});

//For Disable Dot
function disableDot(status) {
   document.getElementById("dotbtn").disabled = status;
}
