import { AsyncStorage } from "react-native";

class NavigatorController {
  constructor() {
    this.pages = [];
    this.settings = {
      payment: 600,
      classTime: 0,
      classFree: 0,
      classLimit: 1,
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
    this.settings[name] = parseInt(value);
  }

  getSettings(name) {
    return this.settings[name] || 0;
  }

  async saveSettings() {
    try {
      //// Set settings
      // Refresh after save
      this.refresh();
      await AsyncStorage.setItem(
        "Discour@Settings",
        JSON.stringify(this.settings)
      );
    } catch (err) {
      // error...
    }
  }

  // Class Time
  getTime() {
    const time = this.settings.classTime;
    const hour = Math.floor(time / 60 / 60);
    const minute = (time / 60) % 60;
    return { hour, minute };
  }

  getTotalTime() {
    const { hour, minute } = this.getTime();
    return hour * 60 * 60 + minute * 60;
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
    const minute = Math.floor(date / 1000 / 60) % 60;
    const hour = Math.floor(date / 1000 / 60 / 60);
    return { second, minute, hour };
  }

  getChronoDiscount() {
    return Math.max(0, this.settings.payment - this.getChronoPayment());
  }

  getChronoPayment() {
    let time = this.getChronoTotalTime();
    time = time / 1000;

    // Qnt.Aulas * DuraçãoAula * DiasSemana * SemenasMeses
    // Resultado: Quantidade de tempo por mês.

    let totalAulas = this.settings.classLimit * 7 * 4;
    totalAulas -= this.settings.classFree * 4;

    let totalClass = this.settings.classTime * totalAulas;
    let formula = (this.settings.payment * (totalClass - time)) / totalClass;

    return formula > 0 ? formula : 0;
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
