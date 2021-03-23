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


var x = ['a'];
x.push(document.getElementById('subj'));
console.log(x);



// SUBJECT OFFERED ARE
// var newTeach = document.getElementById("teach");
// document.getElementById("teach").innerHTML = newTeach;
// console.log(newTeach.innerHTML);

// var subTeach = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("tutors").innerHTML = subTeach;

// function myFunction() {
//     var newTeach = document.getElementById("teach");
// document.getElementById("teach").innerHTML = newTeach;

//   subTeach.push(" " + newTeach);
//   document.getElementById("tutors").innerHTML = subTeach + newTeach.innerHTML;
// }
// console.log(subTeach);


function myFunction() {
    var x = document.forms["teach"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("tutors").innerHTML = text;
  }
  function myFunction() {
     var newTeach = document.getElementById("teach");
     document.getElementById("teach").innerHTML = newTeach;
    
       subTeach.push(" " + newTeach);
       document.getElementById("tutors").innerHTML = subTeach + newTeach.innerHTML;
     }


var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("offered").innerHTML = text;