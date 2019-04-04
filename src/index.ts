import './assets/style.css';

interface IComponent {
  name: String,
  dom: HTMLDivElement,
  button: HTMLButtonElement,
  mount: Function
}

class Component implements IComponent {

  name: string

  dom: HTMLDivElement

  button: HTMLButtonElement

  constructor () {
    this.name = "zangai-component"
    const dom = document.createElement("div")
    dom.innerHTML = "<h2>hello zangai family</h2>"

    const button = document.createElement("button")
    button.innerHTML = "Click me and check the console!"
    button.onclick = function printMe() {
      console.log("I get called!")
    }
    this.button = button
    dom.appendChild(this.button)
    this.dom = dom
  }

  mount (id: string) {
    document.querySelector(id).innerHTML = this.dom.outerHTML;
  }
}

const app = new Component();
app.mount("#app")