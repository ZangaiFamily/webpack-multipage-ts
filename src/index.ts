import './assets/style.css'

interface IComponent {
  mount: (id: string) => void
}

class Component implements IComponent {

  private name: string

  private dom: HTMLDivElement

  private button: HTMLButtonElement

  constructor() {
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

  public mount(id: string): void {
    document.querySelector(id).appendChild(this.dom)
  }
}

const app = new Component()
app.mount("#app")