class StringBuilder {
  constructor(baseString = "") {
    this.string = baseString;
  }

  append(str) {
    this.string += str;
    return this;
  }

  prepend(str) {
    this.string = str + this.string;
    return this;
  }

  pad(str) {
    return this.prepend(str).append(str);
  }
}

const builder = new StringBuilder('.');

builder
  .append('^')
  .prepend('^')
  .pad('=');

console.log(builder); // '=^.^='