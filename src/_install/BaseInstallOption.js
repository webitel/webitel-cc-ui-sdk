export default class BaseInstallOption {
  constructor({ option, name = '' }) {
    this.option = option;
    this.name = name;
  }

  get() {
    if (!this.option) {
      throw new TypeError(`No ${this.name} were registered.
     Please, register your ${this.name} at webitel-cc-ui install!`);
    }
    return this.option;
  }

  set(option) {
    this.option = option;
    return this;
  }
}
