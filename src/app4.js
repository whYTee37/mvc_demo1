import "./app4.css"
import $ from "jquery";

const html_app4 = `
<div class="circle"></div>
`
$(html_app4).appendTo($("#app4"));

const $circle = $("#app4 .circle");
$circle.on("mouseenter", function () {
    $circle.addClass("active")
})
    .on("mouseleave", function () {
    $circle.removeClass("active")
})