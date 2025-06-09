// -=-=-=-=-=-=-=- Events -=-=-=-=-=-=-=-

// ---------- set event handler
// 2 - using addEventListener()
btn2.addEventListener("click", function () {
    console.log("Button 2 first click!");
});

btn2.addEventListener("click", () => console.log("Second"));
btn2.addEventListener("click", () => console.log("Third"));

btn2.onclick = () => console.warn("Super click!");

function showMessage() {
    alert("Button 2 custom function!");
}

btn2.addEventListener("click", showMessage);
btn2.removeEventListener("click", showMessage);

// btn2.removeEventListener("click"); // remove all click handlers

// 3 - using on{event_name} property
const btn3 = document.getElementById('btn3');

btn3.onmousedown = () => console.log("Mouse Down");
btn3.onmouseup = () => console.log("Mouse Up");
btn3.onmouseenter = () => console.log("Mouse Enter");
btn3.onmouseleave = () => console.log("Mouse Leave");

btn3.onmousemove = () => {
    if (btn3.style.backgroundColor === "red")
        btn3.style.backgroundColor = "green";
    else
        btn3.style.backgroundColor = 'red';
}

window.onresize = (e) => document.body.innerHTML += "*";

// ----- [event] parameter contains event information
btn3.onclick = function (event) {
    console.log(event);

    // this == event.currentTarget
    console.log(event.target); // element that effects the event
    this.textContent += ".";

    console.log("Button 3 clicked!");
};

const coordsText = document.querySelector('#coords-text');

window.onmousemove = (event) => {
    // console.log(event);
    coordsText.textContent = `${event.x}:${event.y}`;
}

window.onkeydown = (e) => {
    // console.log(e);
    console.log("Key Pressed:", e.keyCode);

    // if space key pressed
    if (e.code === "Space") {
        // move hero
        console.log("Bingooo");
    }
}

// ------ .stopPropagation()
const innerBlock = document.querySelector('.inner');

innerBlock.onclick = (event) => {
    console.log("inner clicked!");
    event.stopPropagation();

    console.log(event.currentTarget);   // елемент, який наразі обробляє подію
    console.log(event.target);          // елемент на який ми натиснули
};

window.onclick = () => {
    console.warn("Window clicked!");

    console.log(event.currentTarget);
    console.log(event.target);
}
