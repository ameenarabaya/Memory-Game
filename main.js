document.querySelector(".control-button span").onclick = function () {
    let yourname = prompt("What's your Name ? ");
    console.log(yourname);

    if (yourname === null || yourname === "") {
        document.querySelector(".memory-title span").innerHTML = "unknown";
    } else {
        document.querySelector(".memory-title span").innerHTML = yourname;
    }
    document.querySelector(".control-button").remove();
}


let image_container = document.querySelector(".image-container");
let images = document.querySelectorAll(".image-container .image");
let wrongplace = document.querySelector(".mistake span");



let newarr = [];
let wrongtempt = 0;
let clicks = 0;
let orderRange = [...Array(images.length).keys()];

shuffle(orderRange);
// add order css proparity for blocks
images.forEach(function (image, index) {
    image.style.order = orderRange[index];
})


images.forEach(function (e) {
    e.onclick = function () {
        e.classList.add("onclick");
        newarr.push(e);
        clicks++;
        if (clicks === 2) {
            check(newarr);
            newarr = [];
            clicks = 0;
        }
    }
})

function check(array) {

    if (array[0].dataset.technology === array[1].dataset.technology) {
        document.getElementById("success").play();
        return true;
    } else {
        image_container.classList.add("no-clicking");
        setTimeout(() => {
            image_container.classList.remove("no-clicking");
        }, 1000);
        wrongtempt++;
        wrongplace.innerHTML = wrongtempt;
        setTimeout(() => {
            array[0].classList.remove("onclick");
            array[1].classList.remove("onclick");
        }, 1000);
        document.getElementById("failed").play();
    }
}

// shuffle block function
function shuffle(array) {
    // setting vars
    let current = orderRange.length,
        temp, random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}