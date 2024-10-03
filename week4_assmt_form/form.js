window.onload = function(){
    clearForm()
}


const submitBtn = document.querySelector('#submit') // submit button
const inputs = document.querySelectorAll('.required')// inputs & textarea

// title: radio
const radios = document.querySelectorAll('input[type="radio"]')// title
//-----------------------------------
const checkBoxes = document.querySelectorAll('input[name="source"]')//source
//----------------------------------
const errorTitle = document.getElementById('error-title');
const errorSource = document.getElementById('error-source')

// Add event listener - change      <- Radio btns
let selectedRadio;
radios.forEach(radio => {
    radio.addEventListener('change',function(){
        errorTitle.textContent = ''
        errorTitle.style.display = 'none'
        // invalid info
        if(!checkRadioValidity()){
            errorTitle.textContent = 'Please select your title!'
            errorTitle.style.display = 'block'
        }
        // submit button: disable or enable 
        checkFormValidity()
        selectedRadio = document.querySelector('input[name="title"]:checked').value
    })
})

// Add event listener - change     <- checkbox 
let selectedCheckboxes;
checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change',function(){
        errorSource.textContent = ''
        errorSource.style.display = 'none'
        // invalid info
        if(!checkCheckboxValidity()){
            errorSource.textContent = 'Please select at least one option!'
            errorSource.style.display = 'block'
        }   
        // submit button: disable or enable 
        checkFormValidity()
        selectedCheckboxes = Array.from(checkBoxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value);
    })
})


// validate function       <- input & textarea
function validateFunction(field, regex, errorMsg, minLength = 0, maxLength = 100){

    const errorElement = document.getElementById(`error-${field.id}`)

    // keyup event listener
    field.addEventListener('keyup', function(){
        const value = field.value.trim()
        
        if(value.length === 0){
            errorElement.textContent = field.dataset.name + " cannot be empty!"
            if(field.attributes[1].nodeValue === 'customization'){
                errorElement.textContent = errorMsg
            }

        }else if(value.length < minLength || value.length > maxLength){

            errorElement.textContent = `The length must be between ${minLength} and ${maxLength} characters`
            
        }else if(regex && !regex.test(value)){
            errorElement.textContent = errorMsg;

        }else{
            errorElement.textContent = ''
        }

        checkFormValidity()
    })
}

// Add Event Listener & RegExp    <- input & textarea
validateFunction(firstName, /^[A-Za-z]+$/, 'First Name must contain letters only!', 2, 20);// {2,100}
validateFunction(lastName, /^[A-Za-z]+$/, 'Last Name must contain letters only!', 2, 20); // {2,100}
validateFunction(emailId, /^[a-zA-Z0-9._%+-]{1,64}@northeastern\.edu$/, 'Please enter a valid email address ending with @northeastern.edu!');
validateFunction(phoneNumber, /^\d{3}-\d{3}-\d{4}$/, 'Please enter exactly 10 digits in the format xxx-xxx-xxxx.');
validateFunction(streetAddress1,/^[A-Za-z0-9\s\.,#-/]{3,100}$/,'Allowed characters: letters, numbers, spaces, and common punctuation (.,#-/).',3,100);
validateFunction(city, /^[a-zA-Z\u00C0-\u024F\s\-\.]{2,50}$/, '2-50 characters, letters, spaces, hyphens, and periods are allowed.',2,50);
validateFunction(state, /^[A-Z]{2}$/, 'Please enter a valid 2-letter state abbreviation (e.g., CA for California).');
validateFunction(zipCode, /^\d{5}$/, 'Zip Code must be a 5-digit number!');
validateFunction(comments, /^.{5,20}$/, 'Comments length must be between 10 and 20 charaters!', 5, 20);

function checkFormValidity(){
    //const submitBtn = document.getElementById('submit');
    
    const isValid_inputs = checkReqInputValidity()
    const isValid_radio = checkRadioValidity()
    const isValid_checkbox = checkCheckboxValidity()
    const isValid_select = checkDrinkSelectValidity()

    if(!isValid_inputs|| (!isValid_radio)|| (!isValid_checkbox) || (!isValid_select)){
        submitBtn.disabled = true
    }else{
        submitBtn.disabled = false
    }
    
}

function checkReqInputValidity(){
    const inputs = document.querySelectorAll('.required')
    const errors = document.querySelectorAll('.error')

    const isEmpty = Array.from(inputs).some(input => input.value == '')
    const hasError = Array.from(errors).some(error => error.textContent !== '')

    return (isEmpty||hasError)? false : true
}

function checkCheckboxValidity(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const isValid_checkbox = Array.from(checkboxes).some(checkbox => checkbox.checked);
    return isValid_checkbox;
}

function checkRadioValidity(){
    const radios = document.querySelectorAll('input[name="title"]')
    const isValid_radio = Array.from(radios).some(radio => radio.checked)
    return isValid_radio
}

function checkDrinkSelectValidity(){
    return selectBox.value ? true : false
}

// Clear Form
function clearForm() {
    // clear required input & textarea
    inputs.forEach(input => {
        input.value = '';
    });

    // clear radio
    radios.forEach(radio => {
        radio.checked = false;
    });

    // clear checkbox
    checkBoxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // unrequired street address2
    document.getElementById('streetAddress2').value = ''

    // clear select option  <- drinks
    selectBox.value = ''
    
    // clear error info
    errorTitle.textContent = '';
    errorTitle.style.display = 'none';
    errorSource.textContent = '';
    errorSource.style.display = 'none';
    document.getElementById('error-firstName').textContent = ''
    document.getElementById('error-lastName').textContent = ''
    document.getElementById('error-emailId').textContent = ''
    document.getElementById('error-phoneNumber').textContent = ''
    document.getElementById('error-streetAddress1').textContent = ''
    document.getElementById('error-streetAddress2').textContent = ''
    document.getElementById('error-city').textContent = ''
    document.getElementById('error-state').textContent = ''
    document.getElementById('error-zipCode').textContent = ''
    document.getElementById('error-comments').textContent = ''
   
    document.getElementById('checkbox-container').textContent = ''
    document.getElementById('text-field-container').textContent = ''
    document.getElementById('extra-label-container').textContent = ''
    document.getElementById('extra-text-container').textContent = ''
    document.getElementById('extra-error-container').textContent = ''

    // disable submit
    submitBtn.disabled = true;
  
}

// Submit handler to create table and clear form
const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let modalContainer = document.createElement('div')
   // modalContainer.id = 'detailModal'
    modalContainer.classList.add('modal')

    let modalContent = document.createElement('div')
    modalContent.classList.add('modal-content')

    // Create table to display form data
    let table = document.createElement('table')

    table.innerHTML = `
        <tr><td>Title:</d><td>${selectedRadio}</td></tr>
        <tr><td>First Name:</td><td>${document.getElementById('firstName').value}</td></tr>
        <tr><td>Last Name:</td><td>${document.getElementById('lastName').value}</td></tr>
        <tr><td>Email:</td><td>${document.getElementById('emailId').value}</td></tr>
        <tr><td>Phone:</td><td>${document.getElementById('phoneNumber').value}</td></tr>
        <tr><td>Street Address1:</td><td>${document.getElementById('streetAddress1').value}</td></tr>
        <tr><td>Street Address2:</td><td>${document.getElementById('streetAddress2').value}</td></tr>
        <tr><td>City:</td><td>${document.getElementById('city').value}</td></tr>
        <tr><td>State:</td><td>${document.getElementById('state').value}</td></tr>
        <tr><td>Zip Code:</td><td>${document.getElementById('zipCode').value}</td></tr>
        <tr><td>How did you hear:</d><td>${selectedCheckboxes}</td></tr>
        <tr><td>Drinks:</d><td>${selectedDrink}</td></tr>
        `
        
    if(hasExtra){
        table.innerHTML += `
        <tr><td>${labelCheckbox.textContent}:</d><td>Yes</td></tr>
        <tr><td>Any additional customizations:</d><td>${document.getElementById('customization').value}</td></tr>
        <tr><td>Comments:</td><td>${document.getElementById('comments').value}</td></tr>
        `
    }else{
        table.innerHTML += `
        <tr><td>Comments:</td><td>${document.getElementById('comments').value}</td></tr>
        `
    }
   
        
    let confirmBtn = document.createElement('button')
    confirmBtn.innerHTML = 'Confirm'
    confirmBtn.classList.add('float-right')
    
    modalContent.appendChild(table)
    modalContainer.appendChild(modalContent).appendChild(confirmBtn)
    document.body.appendChild(modalContainer)

    modalContainer.style.display = 'flex'

    confirmBtn.addEventListener('click',function(){
        modalContainer.style.display = 'none'
        // Clear form fields
        clearForm();
        submitBtn.disabled = true
    })
    
});

// reset
const resetBtn = document.querySelector('input[type="reset"]')

resetBtn.addEventListener('click',function(){
    clearForm();
    submitBtn.disabled = true
})

//
let selectedDrink
let hasExtra = false
let labelCheckbox

const selectBox = document.getElementById('selectBox')
const checkboxContainer = document.getElementById('checkbox-container')
const textFieldContainer = document.getElementById('text-field-container')

const extraLabelContainer = document.getElementById('extra-label-container')
const extraTextContainer = document.getElementById('extra-text-container')
const extraErrorContainer = document.getElementById('extra-error-container')

selectBox.addEventListener('change',function(){

    checkboxContainer.innerHTML = ''
    textFieldContainer.innerHTML = ''
    extraLabelContainer.innerHTML = ''
    extraTextContainer.innerHTML = ''
    extraErrorContainer.innerHTML = ''
     
    if(selectBox.value){
         selectedDrink = this.value
        //create label
        labelCheckbox = document.createElement('label')
        labelCheckbox.innerHTML = `${this.value} Large($1 Extra)`
        //create input - type:checkbox
        let inputCheckbox = document.createElement('input')
        inputCheckbox.type = 'checkbox'
        inputCheckbox.id = 'extraInfo'

        checkboxContainer.appendChild(labelCheckbox)
        textFieldContainer.appendChild(inputCheckbox)

        // add change event listener
        inputCheckbox.addEventListener('change',function(){
            
            //removeExtraContainerChild()
            extraLabelContainer.innerHTML = ''
            extraTextContainer.innerHTML = ''
            extraErrorContainer.innerHTML = ''
            hasExtra = inputCheckbox.checked

            if(inputCheckbox.checked){
                // create label
                let labelCustom = document.createElement('label')
                labelCustom.innerHTML = 'Any additional customizations*:'
                extraLabelContainer.append(labelCustom)
                // create text area: input type=text
                let textField = document.createElement('textarea')

                // data-name name id placeholder
                textField.type = 'text'
                textField.name = 'extraField'
                textField.id = 'customization'
                textField.placeholder = 'Your customizations, write N/A if none'
                textField.rows = '5'
                textField.cols = '25'
                textField.dataset.name = 'Customization'
                textField.classList.add('required')
                extraTextContainer.append(textField) 

                
                let extraError = document.createElement('div')
                extraError.id = 'error-customization'
                extraError.innerHTML = 'Please write customization, or N/A if none.'
                extraError.classList.add('error')
                extraErrorContainer.append(extraError)
                
                //add keyup listener
                validateFunction(textField,/^.{2,20}$/,'Please write customization, or N/A if none.',2,20)
                    
            }else{
                extraLabelContainer.innerHTML = ''
                extraTextContainer.innerHTML = ''
                extraErrorContainer.innerHTML = ''
                
            }
            checkFormValidity()
        })

    }
    
    checkFormValidity()

})
