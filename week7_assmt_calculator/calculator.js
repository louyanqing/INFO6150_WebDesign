$(document).ready(function () {

  // display username
  let params = getParams(document.location.search);
  $('#login-name').html(params['username'])

  $('#addButton, #subtractButton, #multiplyButton, #divideButton').prop('disabled', true);

  const regExp = /[!@#$%^&*(),.?":{}|<>]/;

  const validateNum = (numberField) => {
    let isValid = true;

    // Number validation
    const number = $(`#${numberField}`).val();
    const err = $(`#${numberField}Err`)
    if (!number) {
      err.text("Please enter a number.");
      isValid = false;
    } else if (isNaN(number)) {
      err.text("It is not a number, please enter a valid number.");
      isValid = false;
    } else if (regExp.test(number)) {
      err.text("Special character are not allowed, please enter a valid number.");
      isValid = false;
    } else {
      err.text("");
    }

    $('#addButton, #subtractButton, #multiplyButton, #divideButton').prop('disabled', !isValid);
    $('#addButton, #subtractButton, #multiplyButton, #divideButton').toggleClass('disabled', !isValid);

    return isValid;
  };


  const clearResult = () => {
    $('#result').val("")
  }

  $('#number1').on('keyup', () => {
    clearResult()
    validateNum('number1')
    validInputs()
  })

  $('#number2').on('keyup', () => {
    clearResult()
    validateNum('number2')
    validInputs()
  })

  const validInputs = () => {
    const valid = ($(".error").text() === "" && $("#number1").val() !== "" && $("#number2").val() !== "") ? true : false;
    $('#addButton, #subtractButton, #multiplyButton, #divideButton').prop('disabled', !valid);
    $('#addButton, #subtractButton, #multiplyButton, #divideButton').toggleClass('disabled', !valid);

  }

  // Single arrow function to handle all operations
  const calculate = (operation) => {
    if (!(validateNum('number1') && validateNum('number2'))) return;

    const num1 = parseFloat($('#number1').val());
    const num2 = parseFloat($('#number2').val());
    let result;

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          $('#number2Err').text("Cannot divide by zero.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = "Invalid operation";
    }

    $('#result').val(result);
  };


  $('#addButton').on('click', () => calculate('add'));
  $('#subtractButton').on('click', () => calculate('subtract'));
  $('#multiplyButton').on('click', () => calculate('multiply'));
  $('#divideButton').on('click', () => calculate('divide'));

  $('#reset').on('click', () => {
    $('#number1').val("")
    $('#number2').val("")
    $('#number1Err').text("")
    $('#number2Err').text("")
    $('#result').val("")
    $('#addButton, #subtractButton, #multiplyButton, #divideButton').prop('disabled', true);
  })

  $("#logout").on("click", () => {

  });


  // ====================
  // Parse the params in the url
  function getParams(url) {
    url = url.split("+").join(" ");
    var params = {},
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(url)) {
      params[decodeURIComponent(tokens[1])]
        = decodeURIComponent(tokens[2]);
    }

    return params;
  }



});
