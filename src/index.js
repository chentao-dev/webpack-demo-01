import "./x.scss";
import "./y.less";
import "./z.styl";
import jpgUrl from "./1.jpg";

console.log("加载js成功");

let app = document.querySelector(".app");
app.innerHTML = `<img src="${jpgUrl}" alt="">`;

//懒加载模块
let button = document.createElement("button");
button.innerHTML = "点击按钮,懒加载模块";
button.onclick = () => {
  import("./lazy.js").then(
    (module) => {
      module.default();
    },
    () => {
      console.log("懒加载失败");
    }
  );
};
app.appendChild(button);
