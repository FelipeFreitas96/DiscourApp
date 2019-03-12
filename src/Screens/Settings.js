import React from "react";
import { TimePickerAndroid } from "react-native";
import {
  TextSmall,
  FlexView,
  FlexCenterView,
  QuestionInput,
  QuestionButton
} from "../styles";
import Header from "../header";
import NavigatorController from "../controller";

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute: 0
    };
    NavigatorController.addPage(this);
  }

  // Inputs Save
  onChangeText(text, setting) {
    text = text.toString().replace(/[^0-9]/g, "");
    text = parseInt(text) || 0;
    NavigatorController.addSettings(setting, text);
  }

  onBlur() {
    NavigatorController.refresh();
  }

  // Open Time Picker
  async openTimePicker() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: this.state.hour,
        minute: this.state.minute,
        is24Hour: true
      });

      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({ hour, minute });
        NavigatorController.addSettings(
          "classTime",
          hour * 60 * 60 + minute * 60
        );
      }
    } catch (err) {
      // error...
    }
  }

  render() {
    return (
      <FlexView>
        <Header {...this.props} />
        <FlexCenterView>
          <TextSmall>Quanto você paga de mensalidade?</TextSmall>
          <QuestionInput
            keyboardType="numeric"
            onChangeText={text => this.onChangeText(text, "payment")}
            onBlur={() => {
              this.onBlur("payment");
            }}
          >
            {NavigatorController.getSettings("payment")}
          </QuestionInput>

          <TextSmall>Quantas horas tem cada aula?</TextSmall>
          <QuestionButton onPress={this.openTimePicker.bind(this)}>
            <TextSmall>
              {this.state.hour}h:{this.state.minute}m
            </TextSmall>
          </QuestionButton>

          <TextSmall>Quantas aulas vagas na semana?</TextSmall>
          <QuestionInput
            keyboardType="numeric"
            onBlur={() => {
              this.onBlur("classFree");
            }}
          >
            {NavigatorController.getSettings("classFree")}
          </QuestionInput>
        </FlexCenterView>
      </FlexView>
    );
  }
}

export default SettingsScreen;
