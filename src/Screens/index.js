import React from "react";
import {
  TextSmall,
  TextBig,
  FlexView,
  FlexCenterView,
  ChronoButton
} from "../styles";
import Header from "../header";

class HomeScreen extends React.Component {
  render() {
    return (
      <FlexView>
        <Header {...this.props} />
        <FlexCenterView>
          <TextSmall>Mensalidade</TextSmall>
          <TextBig>R$ 300,00</TextBig>
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
