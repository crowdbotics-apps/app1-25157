import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings216667Navigator from '../features/Settings216667/navigator';
import Settings216652Navigator from '../features/Settings216652/navigator';
import NotificationList216651Navigator from '../features/NotificationList216651/navigator';
import Maps216650Navigator from '../features/Maps216650/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings216667: { screen: Settings216667Navigator },
Settings216652: { screen: Settings216652Navigator },
NotificationList216651: { screen: NotificationList216651Navigator },
Maps216650: { screen: Maps216650Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
