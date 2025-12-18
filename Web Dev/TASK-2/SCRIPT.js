document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("formMsg");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
    } else if (!email.match(emailPattern)) {
        msg.style.color = "red";
        msg.innerText = "Enter a valid email!";
    } else {
        msg.style.color = "green";
        msg.innerText = "Form submitted successfully!";
    }
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") return;

    let li = document.createElement("li");
    li.innerText = taskInput.value;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(btn);
    taskList.appendChild(li);
    taskInput.value = "";
}