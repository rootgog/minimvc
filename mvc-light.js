export default class MVCLight {
  constructor({ bindAttribute = "data-bind", scope = {} } = {}) {
    this.bindAttribute = bindAttribute;
    this.scope = scope;

    document.querySelectorAll(`[${this.bindAttribute}]`).forEach((element) => {
      element.addEventListener("input", (e) => {
        if (element.contenteditable === "true") {
          this.scope[element.getAttribute(this.bindAttribute)] =
            element.textContent;
        } else {
          this.scope[element.getAttribute(this.bindAttribute)] = element.value;
        }
      });
      this.initProp(element.getAttribute(this.bindAttribute));
    });
  }
  setElementValue(element, value) {
    if (element.localName === "input" || element.type === "textarea") {
      element.value = value;
    } else if (element.getAttribute("contenteditable") === "true") {
      element.textContent = value;
    } else {
      element.innerHTML = value;
    }
  }

  getPropValue(prop) {
    this.scope.hasOwnProperty(prop) ? this.scope[prop] : undefined;
  }
  setPropValue(prop, value) {
    this.scope[prop] = value;
  }

  initProp(prop) {
    let value = this.getPropValue(prop);
    Object.defineProperty(this.scope, prop, {
      set: (newVal) => {
        value = newVal;
        this.setElementValue(
          document.querySelector(`[${this.bindAttribute}=${prop}]`),
          value
        );
      },
      get: () => value,
      enumerable: true,
    });

    value != undefined && this.setPropValue(prop, value);
  }
}
