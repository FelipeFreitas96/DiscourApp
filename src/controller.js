class NavigatorController {
  constructor() {
    this.pages = [];
    this.lastSettings = {};
    this.settings = {
      payment: 600,
      classTime: 0,
      classFree: 0
    };
  }

  addPage(page) {
    this.pages.push(page);
  }

  refresh() {
    for (let page of this.pages) {
      page.forceUpdate();
    }
  }

  addSettings(name, value) {
    if (name == "payment") {
      value = parseInt(value);
      if (value <= 0) return;
    }
    this.settings[name] = value;
  }

  getSettings(name) {
    return this.settings[name] || 0;
  }
}

module.exports = new NavigatorController();
