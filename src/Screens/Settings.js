import React from "react";
import { TextInput } from "react-native";
import { TextSmall, FlexView, FlexCenterView, QuestionInput } from "../styles";
import Header from "../header";

class SettingsScreen extends React.Component {
  render() {
    return (
      <FlexView>
        <Header {...this.props} />
        <FlexCenterView>
          <TextSmall>Quanto você paga de mensalidade?</TextSmall>
          <QuestionInput />
        </FlexCenterView>
      </FlexView>
    );
  }
}

export default SettingsScreen;
