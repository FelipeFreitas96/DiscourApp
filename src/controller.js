class NavigatorController {
  constructor() {
    this.pages = [];
    this.settings = {
      payment: 600,
      classTime: 0,
      classFree: 0,
      chronoStart: 0,
      chronoTotal: 0
    };
  }

  addPage(page) {
    this.pages.push(page);
  }

  // Settings Controller
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

  // Class Time
  getTime() {
    const time = this.settings.classTime;
    const hour = Math.floor(time / 60 / 60);
    const minute = (time / 60) % 60;
    return { hour, minute };
  }

  // Chrono Time
  getChronoTotalTime() {
    const date = this.settings.chronoStart || 0;
    let total = 0;
    if (date > 0) {
      total += new Date().getTime() - date;
    }
    total += this.settings.chronoTotal || 0;
    return total;
  }

  getChronoTime() {
    const date = this.getChronoTotalTime();
    const second = Math.floor(date / 1000) % 60;
    const minute = Math.floor(date / 1000 / 60);
    const hour = Math.floor(date / 1000 / 60 / 60);
    return { second, minute, hour };
  }

  resetChronoStart() {
    const date = this.settings.chronoStart;
    if (date > 0) {
      this.settings.chronoTotal += new Date().getTime() - date;
      this.settings.chronoStart = 0;
    }
  }

  addChronoStart() {
    this.settings.chronoStart = new Date().getTime();
    return this.settings.chronoStart;
  }
}

module.exports = new NavigatorController();
