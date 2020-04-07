export default class MiniMVC {
  constructor({ bindAttribute = "data-bind", data = {} } = {}) {
    this.bindAttribute = bindAttribute;
    this.data = data;

    document.querySelectorAll(`[${this.bindAttribute}]`).forEach((element) => {
      element.addEventListener("input", (e) => {
        if (element.contenteditable === "true") {
          this.data[element.getAttribute(this.bindAttribute)] =
            element.textContent;
        } else {
          this.data[element.getAttribute(this.bindAttribute)] = element.value;
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
    this.data.hasOwnProperty(prop) ? this.data[prop] : undefined;
  }
  setPropValue(prop, value) {
    this.data[prop] = value;
  }

  initProp(prop) {
    let value = this.getPropValue(prop);
    Object.defineProperty(this.data, prop, {
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
