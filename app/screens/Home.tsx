import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Images from '../images';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}>
        <Image style={{width: 30, height: 30}} source={Images.icons.home} />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            fontWeight: '700',
            color: 'rgb(128,128,128)',
          }}>
          Divyanshu's Wall
        </Text>
      </View>
    </View>
  );
}

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <LogoTitle />,
          headerStyle: {
            backgroundColor: '#fff',
            height: 65,
          },
          headerTintColor: '#000',
        }}
      />
    </Stack.Navigator>
  );
}

export default Home;
