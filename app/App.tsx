import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Logger from './screens/Logger';
import Documents from './screens/Documents';
import Menu from './screens/Menu';

import TabComponent from './components/Tab';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 65,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => (
              <TabComponent
                label="home"
                onPress={props.onPress}
                accessibilityState={props.accessibilityState}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Logger"
          component={Logger}
          options={{
            tabBarButton: (props) => (
              <TabComponent
                label="logger"
                onPress={props.onPress}
                accessibilityState={props.accessibilityState}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Documents"
          component={Documents}
          options={{
            tabBarButton: (props) => (
              <TabComponent
                label="documents"
                onPress={props.onPress}
                accessibilityState={props.accessibilityState}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarButton: (props) => (
              <TabComponent
                label="menu"
                onPress={props.onPress}
                accessibilityState={props.accessibilityState}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
