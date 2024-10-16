const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
})

// var a = document.querySelector("#elem1")
// var abc = a.getAttribute('data-image')

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none"
})

// var elems = document.querySelectorAll(".elem")
// elems.forEach(function (e) {
//   e.addEventListener("mouseenter", function () {
//     var Image = e.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${Image})`
//   })
// })

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var Image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${Image})`
  })
})

// function menuAnimation(){

// }

var loader = document.querySelector("#loader")
setTimeout(() => {
  loader.style.top = "-100%"
}, 0000)

var ima = document.querySelector(".elem")
ima.addEventListener("mouseenter", function () {
  var ui = ima.getAttribute("img-src")
  fixed.style.backgroundImage = `url(${ui})`
})
