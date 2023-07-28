var bar = document.getElementById("bar");
var close = document.getElementById("close");
var nav = document.getElementById("navbar");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}
// single product or detail page
function myfunction() {
    var x = document.getElementById("para")
    var y = document.getElementById("hidepara")
    if (x.style.display == "none") {
        x.style.display = "block"
        x.style.transition = "all ease 0.3s"
    } else {
        x.style.display = "none"
        x.style.transition = "all ease 0.3s"

    }
}
var mainimg = document.getElementById("mainimg")
var smallimg = document.getElementsByClassName("sml-img")
smallimg[0].onclick = function() {
    mainimg.src = smallimg[0].src
}
smallimg[1].onclick = function() {
    mainimg.src = smallimg[1].src
}
smallimg[2].onclick = function() {
    mainimg.src = smallimg[2].src
}
smallimg[3].onclick = function() {
    mainimg.src = smallimg[3].src
}


function remove() {
    var x = document.getElementById("rmv-item1");
    if (x.style.display = "table-row") {
        x.style.display = "none"
        alert('Item is deleted')

    } else {
        x.style.display = "table-row"
    }
}

function remove2() {
    var y = document.getElementById("rmv-item2");
    if (y.style.display = "table-row") {
        y.style.display = "none"
        alert('Item is deleted')
    } else {
        y.style.display = "table-row"
    }

}

function remove3() {
    var z = document.getElementById("rmv-item3");
    if (z.style.display = "table-row") {
        z.style.display = "none"
        alert('Item is deleted')
    } else {
        z.style.display = "table-row"
    }
}