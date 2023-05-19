class MyCategories extends HTMLElement {
  constructor() {
    super();
    console.log("constructed!")
  }

  connectedCallback() {
   console.log("connected!");
 }

  disconnectedCallback() {
   console.log("disconnected!");
 }

  attributeChangedCallback(name, oldValue, newValue) {
   console.log(`Attribute: ${name} changed!`);
 }

 static get observedAttributes() {
  return ["caption"];
 }
}

customElements.define("my-categories", MyCategories);
