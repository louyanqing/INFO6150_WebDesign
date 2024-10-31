
$(document).ready(function () {

    clearForm()

});

var isCPTouched = false;
var count = 0;

const validateFunction = (field, regex, errorMsg, minLength, maxLength) => {
    const errorElement = $('#error-' + field);
    const inputElement = $('#' + field)

    // keyup event listener
    inputElement.keyup(() => {

        const value = inputElement.val()

        const isConfirmPassword = (field === 'confirmPassword') ? true : false;

        if (isConfirmPassword) {
            count++
            isCPTouched = count > 1;
        }

        PassWorChange(field);

        if (value.length === 0) {
            errorElement.text(inputElement.data('name') + ' cannot be empty!')
            if (count <= 1) {
                $('#error-confirmPassword').text('')
            }
            if (isConfirmPassword) {
                errorElement.text('Please confirm the password!')
            }

        } else if (value.length < minLength || value.length > maxLength) {
            if (!isConfirmPassword) {
                errorElement.text(`The length must be between ${minLength} and ${maxLength} characters`)
            } else if (isConfirmPassword && value.length !== minLength) {
                errorElement.text('Passwords do not match!')
            }

        } else if (isConfirmPassword && value !== $('#password').val() && isCPTouched) {
            // If it's confirm password, check if it matches the password field
            errorElement.text('Passwords do not match!')

        } else if (regex && !regex.test(value)) {
            errorElement.text(`${errorMsg}`);

        } else {
            errorElement.text('')
        }

        checkFormValidity()

    });
}

// Add Event Listener & RegExp    <- input
validateFunction('username', /^[A-Za-z]+$/, 'User Name must contain letters only!', 2, 20);// {2,100}
validateFunction('email', /^[a-zA-Z0-9._%+-]{1,64}@northeastern\.edu$/, 'Please enter a valid email address ending with @northeastern.edu!');
validateFunction('password', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, 'Password must be at least one letter (uppercase or lowercase) and at least one digit!', 8, 20);
validateFunction('confirmPassword', null, '', 8, 20);

// Confirm password validation
const PassWorChange = field => {
    if (field === 'password') {
        $('#confirmPassword').val('')
        $('#error-confirmPassword').text('')
        count = 0;

    }
}

const checkFormValidity = () => {
    const isValid_inputs = checkInputsValidity()

    if (!isValid_inputs) {
        $('#submitBtn').prop('disabled', true)
        $('#submitBtn').removeClass('btn-primary')
        $('#submitBtn').addClass('disabled-btn')

    } else {
        $('#submitBtn').prop('disabled', false)
        $('#submitBtn').removeClass('disabled-btn')
        $('#submitBtn').addClass('btn-primary')

    }
}

const checkInputsValidity = () => {
    const inputs = $('.form-control')
    const errors = $('.error')

    const isEmpty = Array.from(inputs).some(input => $(input).val() == '');
    console.log(isEmpty);
    const hasError = Array.from(errors).some(error => !$(error).is(':empty'));
    console.log(hasError);


    return (isEmpty || hasError) ? false : true
}

const clearForm = () => {

    // Disable the login button initially
    $('#submitBtn').prop('disabled', true);
    $('#submitBtn').addClass('disabled-btn');

    $('#username').val('')
    $('#email').val('')
    $('#passname').val('')
    $('#confirmPassword').val('')

    $('#error-username').text('')
    $('#error-email').text('')
    $('#error-password').text('')
    $('#error-confirmPassword').text('')

}


$("#submitBtn").on("click", (event) => {
    event.preventDefault();
    localStorage.setItem('username', $('#username').val())
    window.location.href = "calculator.html"
});



