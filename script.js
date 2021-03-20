// document.getElementById('login').style.display='block'"
// const getElementById(kali);

function check(form) {

    if (form.userid.value == "samuel" && form.pwd.value == "samuel") {
        return true;
    }
    else {
        alert("Error Password or Username")
        return false;
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}