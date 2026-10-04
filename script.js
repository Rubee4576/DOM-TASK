document.addEventListener("DOMContentLoaded", function () {

    const greeting = document.getElementById("greeting");
    const nameInput = document.getElementById("nameInput");
    const greetButton = document.getElementById("greetButton");

    const boxes = document.querySelectorAll(".box");

    // Greet button
    greetButton.addEventListener("click", function () {

        const name = nameInput.value;

        greeting.textContent = "Hello, " + name;
    });

    // Color boxes
    boxes.forEach(function (box) {

        box.addEventListener("click", function () {

            const color = box.textContent.trim().toLowerCase();

            box.style.backgroundColor = color;
        });

    });

});