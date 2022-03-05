import "./app3.css";
import $ from "jquery";

const html_app3 = `
<div class="square"></div>
`;

$(html_app3).appendTo($("#app3"));

$(".square").on("click", function () {
  $(".square").toggleClass("active");
});
