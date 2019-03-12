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
    NavigatorController.addPage(this);
  }

  // eslint-disable-next-line class-methods-use-this
  async componentHidden(state) {
    if (state === "background") {
      try {
        //// Set settings
        // Refresh after save
        NavigatorController.refresh();
        const string = JSON.stringify(NavigatorController.settings);
        await AsyncStorage.setItem("Discour@Settings", string);
      } catch (err) {
        // error...
      }
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
          <TextBig>00:00:00</TextBig>
          <ChronoButton>
            <TextSmall style={{ color: "white" }}>Cronometrar</TextSmall>
          </ChronoButton>
        </FlexCenterView>
      </FlexView>
    );
  }
}

export default HomeScreen;
