import "./global.css";
//app1模块用mvc暴露接口，其他app模块简易打包。
import x from "./app1.js";
import "./app2.js";
import "./app3.js";
import "./app4.js";
x.init("#app1");
