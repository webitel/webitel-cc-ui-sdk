class InstallOptionsRepository {
  _repository = {};

  constructor(options = {}) {
    this._repository = { ...options };
  }

  get(name) {
    const option = this._repository[name];
    if (!option) throw new TypeError(`The ${name} in install options repository is not found.`)
    return option;
  }

  set({ name, value }) {
    this._repository[name] = value;
    return this;
  }

  setBulk(options = {}) {
    Object.keys(options).forEach((name) => {
      this.set({ name, value: options[name] });
    });
  }
}

const installOptionsRepository = new InstallOptionsRepository();

export default installOptionsRepository;
