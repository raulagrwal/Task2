function validateEmail() {
    const inputText = document.getElementById("email").value;
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(regEx)) {
        if (typeof(Storage) != "undefined") {
            localStorage.setItem("EmailAddress", inputText);
            alert('Email Address is locally stored - ' + localStorage.getItem("EmailAddress"));
        } else {
            document.getElementById("result").innerHTML = "Local Storage functionality is not supported";
        }
    }
    else {
        alert("Invalid Email address.");
    }
}