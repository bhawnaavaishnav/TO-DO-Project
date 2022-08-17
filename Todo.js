// enter text in input-------------------
function inputField() {
    var x = document.getElementById("inputScreen").value;
    console.log(x)
}

// for add value in to-do--------------------
function add() {
    var x = document.getElementById("inputScreen").value;
    document.getElementById("task").innerText += x;
    console.log(x)
    clear();
    if (x == 0) {
        alert('Please Enter Text')
    }
}

// for remove text from input--------------------
function clear() {
    document.getElementById("inputScreen").value = "";
}

// for remove text from to-do--------------------
function clear2(){
    document.getElementById("task").innerText = "";
}

// function for delete text------------------------
function del() {
    var element = document.getElementById("task").textContent = '';
    console.log(element)
}

// replace text in another div------------------------
function complete() {
    var x = document.getElementById("task").innerText;
    console.log(x)
    document.getElementById("com").innerText = x;
    clear2()
}

// second function for delete text from completed------------------
function dele() {
    var element = document.getElementById("com").textContent = '';
    console.log(element)
}
