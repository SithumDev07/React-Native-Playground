// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { CreditCardIcon, HomeIcon, TruckIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import Earning from './screens/Earning';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(241, 242, 247)',
    background: '#EFEFFB',
    card: 'rgb(241, 242, 247)'
  },
};

export default function App() {
  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: '#EFEFFB', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }]}>

      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: () => (
              <HomeIcon size={25} />
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#17DDD0',
          }} />
          <Tab.Screen name='Shipping' component={Home} options={{
            tabBarIcon: () => (
              <TruckIcon size={25} />
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#17DDD0',
          }} />
          <Tab.Screen name='Earnings' component={Earning} options={{
            tabBarIcon: () => (
              <CreditCardIcon size={25} />
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#17DDD0',
          }} />
          <Tab.Screen name='Profile' component={Home} options={{
            tabBarIcon: () => (
              <UserCircleIcon size={25} />
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#17DDD0',
          }} />
        </Tab.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
