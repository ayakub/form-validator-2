function ValidateEmail() {
    var email = document.getElementById("txtEmail").value;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        lblError.innerHTML = "Email is not a valid email!.";
    }
}

function ValidateName() {
    var nameElem = document.getElementById('names').value;
    var nameError = document.getElementById('nameError');
    var usernameRegex = /^[a-zA-Z]/;
    nameError.innerHTML = "";

    if(!usernameRegex.test(nameElem)) {
        nameError.innerHTML ="name Required"
    }
}

function ValidateAge() {
    var ageElem = document.getElementById('age').value;
    var ageError = document.getElementById('ageError');
    ageError.innerHTML = "";
    

    if (ageElem <0 || ageElem>=99) {
        ageError.innerHTML = "Age must be between 0 and 99"
        return false;
    }
}