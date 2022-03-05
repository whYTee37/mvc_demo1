import "./app2.css";
import $ from "jquery";

const html_app2 = `
<ol class="tab-bar">
<li>体育新闻</li>
<li>娱乐新闻</li>
</ol>
<ol class="tab-content">
<li>content1</li>
<li>content2</li>
</ol>
`;
$(html_app2).appendTo($("#app2"));
$("#app2>.tab-bar").on("click", "li", function (e) {
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index();
  $("#app2>.tab-content")
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

//进页面先自动设置一个触发，否则用户不点击前看不到首页有什么
$("#app2>.tab-bar").children().eq(0).trigger("click");
