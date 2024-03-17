import React from 'react'; 
import { CreateBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import periodTracker from "../screens/periodTrackerScreen";
import Login from "../screens/LoginScreen"; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
      return(
        <Tab.BottomTabNavigator 
                screenOptions= {({ route })} => ({
                  tabBarIcon: ({focused, color, size}) => {
                    let iconName; 
                    if (route.name === 'periodTracker'){
                      iconName = focused
                           ? 'period'
                           ? 'period-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                  },
                })}
                tabBarOptions={{
                  activeTintColor: 'blue', 
                  inactiveTintColor: 'white',
                }}
            >
               <Tab.Screen name="LoginScreen" componet={Login} options={{headerShown:false}}/>
               <Tab.Screen name="periodTrackerScreen" component={PeriodTracker} options = {{headerShown:false}}/>
      );
}

export default BottomTabNavigator

