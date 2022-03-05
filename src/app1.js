import $ from "jquery";

const eventBus = $(window);

//m,数据相关模块
const m = {
  data: {
    n: parseInt(localStorage.getItem("storage-n")) || 1024,
  },
  create() {},
  delete() {},
  update(data) {
    Object.assign(m.data, data);
    eventBus.trigger("m:updated");
    localStorage.setItem("storage-n", data.n);
  },
  get() {},
};

//v,view,视图相关模块
const v = {
  html: `
    <div class="output">
        <span id="number">{{n}}</span>
    </div>
    <div class="actions">
        <button id="add1">+1</button>
        <button id="minus1">-1</button>
        <button id="mul2">*2</button>
        <button id="divide2">/2</button>
    </div>
    `,
  el: null,
  init(container) {
    v.el = $(container);
  },
  render(n) {
    if (v.el.children.length !== 0) v.el.empty();
    $(v.html.replace("{{n}}", n)).appendTo(v.el);
  },
};

const c = {
  init(container) {
    v.init(container);
    v.render(m.data.n); // view = render(data)
    c.autoBindEvents();
    eventBus.on("m:updated", () => {
      console.log("here");
      v.render(m.data.n);
    });
  },
  events: {
    "click #add1": "add",
    "click #minus1": "minus",
    "click #mul2": "mul",
    "click #divide2": "div",
  },
  add() {
    m.update({ n: m.data.n + 1 });
  },
  minus() {
    m.update({ n: m.data.n - 1 });
  },
  mul() {
    m.update({ n: m.data.n * 2 });
  },
  div() {
    m.update({ n: m.data.n / 2 });
  },
  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]];
      const spaceIndex = key.indexOf(" ");
      const part1 = key.slice(0, spaceIndex);
      const part2 = key.slice(spaceIndex + 1);
      v.el.on(part1, part2, value);
    }
  },
};
export default c;
