
class Calculator extends HTMLElement {

  constructor() {
    super()
    console.log('Created Calculator')
    this._a = '0'
    this._b = '0'

  }

  get a() {
    return this._a
  }

  set a(v) {
    this._a = v
    this.render()
  }

  get b() {
    return this._b
  }

  set b(v) {
    this._b = v
    this.render()
  }

  static get observedAttributes() {
    return ['a', 'b', 'operator']
  }
  connectedCallback() {
    this.render()
  }

  render() {
    const a = this._a || this.getAttribute('a')
    const b = this._b || this.getAttribute('b')

    this.innerHTML = `
      <style>p {color:green;}</style>
    <p>calculator performs ${a} + ${b} = ${a * 1 + b * 1}</p>
    `
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render()
  }

  disconnectedCallback() {
    console.log('element is disconnected')
  }
}


window.customElements.define('x-calculator', Calculator)


