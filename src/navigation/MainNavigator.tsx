import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const MainNavigator = (): React.ReactElement => {
  const scheme = useColorScheme();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Manga List'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({
            title: route.params.title,
            headerBackTitle: 'Back',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
