
 function dynamicdate() {
    const d = new Date();
    document.getElementById("time").innerHTML = "Today is " + d.toDateString();
}


var isShow = false
var formShow = document.getElementById('formShow')
formShow.style.display = 'none'

function showTab() {
    isShow = !isShow
    if (isShow) {
        formShow.style.display = 'contents'
    } else {
        formShow.style.display = 'none'
    }
}


var slider = document.getElementById("range");
var output = document.getElementById("outcome");
var sub = document.getElementById('sub')
var isDis = true
sub.disabled = true
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};

function validate() {

    Formdata1()
}


var inputs = document.querySelectorAll('input');


inputs.forEach(function(input) {
    
    input.addEventListener('change', function() {
      
        console.log('值已改变:', this.value);
        Formdata1()
    });
});



document.getElementById("Todaysdate").onchange = validateDate;

/*review table*/
function Formdata1() {
    let userFirstName = document.getElementById("firstname").value;
    let firstNameValidationMessage = document.getElementById("firstNameValidationMessage");
    let displayFirstName = document.getElementById("FirstName");
    displayFirstName.value = userFirstName;
    let firstNamePattern = /^[A-Za-z]{1,30}$/;
    if (!firstNamePattern.test(userFirstName)) {
        firstNameValidationMessage.textContent = "Invalid first name";
        firstNameValidationMessage.style.color = "red";
    } else {
        firstNameValidationMessage.textContent = "";
    }

    let userMiddleName = document.getElementById("middlename").value;
    console.log('userMiddleName', userMiddleName);
    let middleNameValidationMessage = document.getElementById("middleNameValidationMessage");
    let displayMiddleName = document.getElementById("MiddleName");
    displayMiddleName.value = userMiddleName;
    let middleNamePattern = /^[A-Za-z]{0,30}$/;
    console.log('999999999999', !middleNamePattern.test(userMiddleName));
    /*alert*/
    if (!middleNamePattern.test(userMiddleName)) {
        middleNameValidationMessage.textContent = "Invalid middle name";
        middleNameValidationMessage.style.color = "red";
    } else {
        middleNameValidationMessage.textContent = "";
    }


    let userLastName = document.getElementById("lastname").value;
    let displayLastName = document.getElementById("LastName");
    displayLastName.value = userLastName;
    let lastNameValidationMessage = document.getElementById("lastNameValidationMessage");
    let lastNamePattern = /^[A-Za-z]{1,30}$/;
    /*alert*/
    if (!lastNamePattern.test(userLastName)) {
        lastNameValidationMessage.textContent = "Invalid last name";
        lastNameValidationMessage.style.color = "red";
    } else {
        lastNameValidationMessage.textContent = "";
    }


    let userDOB = document.getElementById("dob").value;
    let displayDOB = document.getElementById("DOB");
    displayDOB.value = userDOB;

    let dobValidationMessage = document.getElementById("dobValidationMessage");
    let dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;


    /* Validation for Date of Birth */
    if (!dobPattern.test(userDOB)) {
        dobValidationMessage.textContent = "Invalid date of birth";
        dobValidationMessage.style.color = "red";
    } else {
        dobValidationMessage.textContent = "";

    }

    let message = document.getElementById("SSNValidationMessage");
    let value = document.querySelector("#SSN").value;
    let pt = /^\d{3}-\d{2}-\d{4}$/;
    if (!pt.test(value)) {
        console.log(';;', message);
        message.textContent = "Invalid SSN";
        // return false;
    } else {

        message.textContent = "";
    }
    // return true;

    
    let phonenumberValidationMessage = document.getElementById("phonenumberValidationMessage");
    let phonenumber = document.querySelector("#phonenumber").value;
    let pt1 = /^\d{3}-\d{3}-\d{4}$/;
    if (!pt1.test(phonenumber)) {
        console.log('>>>>>>>>.', phonenumberValidationMessage);
        phonenumberValidationMessage.textContent = "Invalid phonenumber";
    } else {
        phonenumberValidationMessage.textContent = "";

    }

    let zipValidationMessage = document.getElementById("zipValidationMessage");
    let zip = document.querySelector("#zipcode").value;
    let pt2 = /^\d{5}$/;
    if (!pt2.test(zip)) {
        console.log('>>>>>>>>.', zipValidationMessage);
        zipValidationMessage.textContent = "Invalid zip";
    } else {
        zipValidationMessage.textContent = "";

    }


    let message1 = document.querySelector("#password1ValidationMessage");
    let message2 = document.querySelector("#password2ValidationMessage");
    let password1 = document.querySelector("#password1").value;
    let password2 = document.querySelector("#password2").value;


    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;


    if (!password1 || password1.length < 8 || password1.length > 30 || !passwordRegex.test(password1)) {
        message1.textContent = "Invalid Password.Must be 8-30 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character. ";
    } else {

        if (password1 !== password2) {
            message2.textContent = "Error: Passwords do not match.";
        } else {

            message1.textContent = "";
            message2.textContent = "";
        }
    }


    let userAddress = document.getElementById("test").value;
    console.log('+', userAddress);
    let displayAddress = document.getElementById("Address");
    displayAddress.value = userAddress;

    let addressValidationMessage = document.getElementById("addressValidationMessage");
    let addressPattern = /^[a-zA-Z0-9 ]{1,30}$/;


    if (!addressPattern.test(userAddress)) {
        addressValidationMessage.textContent = "Invalid address";
        addressValidationMessage.style.color = "red";
    } else {
        addressValidationMessage.textContent = "";
    }

    let d = document.getElementById("state")
    let userState = d.options[d.selectedIndex].value;
    let displayState = document.getElementById("State");

    displayState.value = userState;
    let stateValidationMessage1 = document.getElementById("stateValidationMessage1");
    console.log('stateValidationMessage', stateValidationMessage1);
    let statePattern = /^[A-Za-z]{2}$/;

    if (!statePattern.test(userState)) {
        stateValidationMessage1.textContent = "Invalid state";
        stateValidationMessage1.style.color = "red";
    } else {
        stateValidationMessage1.textContent = "";
    }


    let userEmail = document.getElementById("email").value;
    let displayEmail = document.getElementById("Email");
    displayEmail.value = userEmail;
    let emailValidationMessage = document.getElementById("emailValidationMessage");
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('!emailPattern.test(userEmail)', !emailPattern.test(userEmail));
    if (!emailPattern.test(userEmail)) {
        emailValidationMessage.textContent = "Invalid email address";
        emailValidationMessage.style.color = "red";
    } else {
        emailValidationMessage.textContent = "";
    }

    //  user ID in table
    let userID = document.getElementById("userid").value;
    let displayUserID = document.getElementById("UserID");
    displayUserID.value = userID;

    let userIDValidationMessage = document.getElementById("userIDValidationMessage");
    let userIDPattern = /^[A-Za-z0-9]{1,10}$/;

    if (!userIDPattern.test(userID)) {
        userIDValidationMessage.textContent = "Invalid UserID.";
        userIDValidationMessage.style.color = "red";
    } else {
        userIDValidationMessage.textContent = "";

    }

    //  user's email & userID in table 
    document.getElementById("Email").value = userEmail;
    document.getElementById("UserID").value = userID;

    let today = document.getElementById('Todaysdate')
    let dateValidationMessage = document.getElementById('dateValidationMessage')
    if (!today.value) {
        dateValidationMessage.textContent = "Invalid dateValidationMessage.";
        dateValidationMessage.style.color = "red";
    } else {
        dateValidationMessage.textContent = "";
        var sub = document.getElementById('sub')
         sub.disabled = false
    }
    document.getElementById("Todaysdate").onchange = validateDate;

}

function validateDate() {
    let selectedDate = new Date(document.getElementById("Todaysdate").value);
    let today = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if (selectedDate.getTime() !== today.getTime()) {
        document.getElementById("dateValidationMessage").textContent = "Please select today's date";
        document.getElementById("dateValidationMessage").classList.add("error");
        var sub = document.getElementById('sub');
        sub.disabled = true; // Disable the submit button if the selected date is not today
    } else {
        document.getElementById("dateValidationMessage").textContent = "";
        document.getElementById("dateValidationMessage").classList.remove("error");
        var sub = document.getElementById('sub');
        sub.disabled = false; // Enable the submit button if today's date is selected
    }
}

function Formdata() {

    if (validateFirstName() && validateMiddleName() && validateLastName() &&
        validateAddress1() && validateState() && validateDateOfBirth() && validateSSN() &&
        validateEmail() &&
        validatePhoneNumber() && validateUserId() && validatePassword()) {
        document.querySelector("#formShow").style.display = "block";
        showTbaleDate();
    }

    let userFirstName = document.getElementById("firstname").value;
    let firstNameValidationMessage = document.getElementById("firstNameValidationMessage");
    let displayFirstName = document.getElementById("FirstName");
    displayFirstName.value = userFirstName;
    let firstNamePattern = /^[A-Za-z]{1,30}$/;

    if (!firstNamePattern.test(userFirstName)) {
        firstNameValidationMessage.textContent = "Invalid first name";
        firstNameValidationMessage.style.color = "red";
        return
    } else {
        firstNameValidationMessage.textContent = "";
    }

    let userMiddleName = document.getElementById("middlename").value;
    let middleNameValidationMessage = document.getElementById("middleNameValidationMessage");
    let displayMiddleName = document.getElementById("MiddleName");
    displayMiddleName.value = userMiddleName;
    let middleNamePattern = /^[A-Za-z]{0,30}$/;
    /*alert*/
    if (!middleNamePattern.test(userMiddleName)) {
        middleNameValidationMessage.textContent = "Invalid middle name";
        middleNameValidationMessage.style.color = "red";
        return
    } else {
        middleNameValidationMessage.textContent = "";
    }

    let userLastName = document.getElementById("lastname").value;
    let displayLastName = document.getElementById("LastName");
    displayLastName.value = userLastName;
    let lastNameValidationMessage = document.getElementById("lastNameValidationMessage");
    let lastNamePattern = /^[A-Za-z]{1,30}$/;
    /*alert*/
    if (!lastNamePattern.test(userLastName)) {
        lastNameValidationMessage.textContent = "Invalid last name";
        lastNameValidationMessage.style.color = "red";
        return
    } else {
        lastNameValidationMessage.textContent = "";
    }



    let userDOB = document.getElementById("dob").value;
    let displayDOB = document.getElementById("DOB");
    displayDOB.value = userDOB;

    let dobValidationMessage = document.getElementById("dobValidationMessage");
    let dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;

    /* Validation for Date of Birth */
    if (!dobPattern.test(userDOB)) {
        dobValidationMessage.textContent = "Invalid date of birth";
        dobValidationMessage.style.color = "red";
        return
    } else {
        dobValidationMessage.textContent = "";
    }

    let userAddress = document.getElementById("test").value;
    let displayAddress = document.getElementById("Address");
    displayAddress.value = userAddress;

    let addressValidationMessage = document.getElementById("addressValidationMessage");
    let addressPattern = /^[a-zA-Z0-9 ]{1,30}$/;

    if (!addressPattern.test(userAddress)) {
        addressValidationMessage.textContent = "Invalid address";
        addressValidationMessage.style.color = "red";
        return
    } else {
        addressValidationMessage.textContent = "";
    }


    let userState = document.getElementById("state").value;
    let displayState = document.getElementById("State");
    displayState.value = userState;
    let stateValidationMessage = document.getElementById("stateValidationMessage1");
    let statePattern = /^[A-Za-z]{2}$/;

    if (!statePattern.test(userState)) {
        stateValidationMessage.textContent = "Invalid state";
        stateValidationMessage.style.color = "red";
        return
    } else {
        stateValidationMessage.textContent = "";
    }


    let userEmail = document.getElementById("email").value;
    let displayEmail = document.getElementById("Email");
    displayEmail.value = userEmail;
    let emailValidationMessage = document.getElementById("emailValidationMessage");
    let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{8,}$/;

    if (!emailPattern.test(userEmail)) {
        emailValidationMessage.textContent = "Invalid email address";
        emailValidationMessage.style.color = "red";
        return
    } else {
        emailValidationMessage.textContent = "";
    }

    // put user ID in the table
    let userID = document.getElementById("userid").value;
    let displayUserID = document.getElementById("UserID");
    displayUserID.value = userID;

    let userIDValidationMessage = document.getElementById("userIDValidationMessage");
    let userIDPattern = /^[A-Za-z0-9]{1,10}$/;

    if (!userIDPattern.test(userID)) {
        userIDValidationMessage.textContent = "Invalid UserID.";
        userIDValidationMessage.style.color = "red";
        return
    } else {
        userIDValidationMessage.textContent = "";
    }

    // user's email and userID
    document.getElementById("Email").value = userEmail;
    document.getElementById("UserID").value = userID;

    let selectedDate = new Date(document.getElementById("Todaysdate").value);
    let data = document.getElementById("Todaysdate").value
    let today = new Date();
    console.log(0000, data);
    if (data && selectedDate > today) {
        console.log('-0-0');
        document.getElementById("dateValidationMessage").textContent = "Date cannot be in the future";
        document.getElementById("Todaysdate").classList.add("error");
    } else {
        document.getElementById("dateValidationMessage").textContent = "";
        document.getElementById("Todaysdate").classList.remove("error");


    }


    document.getElementById("Todaysdate").onchange = validateDate;
}

console.log('>>', document.getElementById("state"));

document.getElementById("state").onchange = function() {
    let displayState = document.getElementById("State");
    let stateValidationMessage = document.getElementById("stateValidationMessage1");
    console.log(this.options[this.selectedIndex].value);
    if (displayState) {
        stateValidationMessage.textContent = "";
    }
    displayState.value = this.options[this.selectedIndex].value
}