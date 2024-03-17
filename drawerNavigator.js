import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Logout from "../screens/LoginScreen";
import PeriodTracker from ".,/screens/periodTrackerScreen"
import firebase from "firebase";

import CustomSidebarMenu from "../screens/CustomSlidebarMenu";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark_theme: true
    };
  }

  componentDidMount() {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function (snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({ dark_theme: theme === "light" ? true : false });
  }

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomSidebarMenu {...props} />}
        screenOptions={{
          headerShown: false, 
          drawerActiveTintColor: "#e91e63",
          drawerInactiveTintColor: "blue",
          itemStyle: { marginVertical: 5 }
        }}
      >
        <Drawer.Screen
          name="LoginScreen"
          component={Login}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="periodTrackerScreen"
          component={PeriodTracker}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}