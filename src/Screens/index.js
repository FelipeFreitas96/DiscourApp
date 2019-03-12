import React from "react";
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
