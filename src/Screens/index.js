import React from "react";
import { AppState, AsyncStorage } from "react-native";
import {
  TextSmall,
  TextBig,
  FlexView,
  FlexCenterView,
  ChronoButton
} from "../styles";
import Header from "../header";
import NavigatorController from "../controller";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.chronoTimerString = "00:00:00";
    this.chronoButtonString = "Cronometrar";
    this.interval = setInterval(() => this.loopEvent(), 1000);

    NavigatorController.addPage(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentHidden(state) {
    if (state === "background") {
      NavigatorController.saveSettings();
    }
  }

  async componentDidMount() {
    // Load Settings in the first entry
    try {
      // Get settings
      let tmp = await AsyncStorage.getItem("Discour@Settings");
      tmp = JSON.parse(tmp);
      if (tmp) {
        NavigatorController.settings = tmp;
        NavigatorController.refresh();
      }
      // // Change rending if all okay
      // this.rendering = <DrawerNavigator {...this.props} />;
      // this.forceUpdate();
    } catch (err) {
      // error...
    }
    AppState.addEventListener("change", this.componentHidden);
  }

  loopEvent() {
    let { hour, minute, second } = NavigatorController.getChronoTime();
    const { chronoStart } = NavigatorController.settings;

    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    second = ("0" + second).slice(-2);

    this.chronoTimerString = `${hour}:${minute}:${second}`;
    this.chronoButtonString = chronoStart > 0 ? "Pausar" : "Cronometrar";
    this.forceUpdate();
  }

  onPressChrono() {
    const { chronoStart } = NavigatorController.settings;
    if (chronoStart > 0) {
      NavigatorController.resetChronoStart();
      this.chronoButtonString = "Cronometrar";
    } else {
      NavigatorController.addChronoStart();
      this.chronoButtonString = "Pausar";
    }
    NavigatorController.saveSettings();
  }

  render() {
    return (
      <FlexView>
        <Header {...this.props} />
        <FlexCenterView>
          <TextSmall>Mensalidade</TextSmall>
          <TextBig>
            R$ {NavigatorController.getSettings("payment").toFixed(2)}
          </TextBig>
          <TextSmall>Cronometro:</TextSmall>
          <TextBig>{this.chronoTimerString}</TextBig>
          <ChronoButton onPress={this.onPressChrono.bind(this)}>
            <TextSmall style={{ color: "white" }}>
              {this.chronoButtonString}
            </TextSmall>
          </ChronoButton>
        </FlexCenterView>
      </FlexView>
    );
  }
}

export default HomeScreen;
