import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

class Header extends React.Component {
  openDrawer() {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  render() {
    return (
      <View style={{ backgroundColor: "gray" }}>
        <Icon
          name="menu"
          size={40}
          color="white"
          onPress={this.openDrawer.bind(this)}
        />
      </View>
    );
  }
}

export default Header;
