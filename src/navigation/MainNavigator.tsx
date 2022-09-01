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
import ChapterScreen from '../screens/ChapterScreen';

const MainNavigator = (): React.ReactElement => {
  const scheme = useColorScheme();

  const Stack = createNativeStackNavigator();

  const displayTitle = params => {
    const chapter = params.chapter ? `#${params.chapter} - ` : '';
    return `${chapter}${params.title}`;
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
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
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="ChapterScreen"
            component={ChapterScreen}
            options={({route}) => ({
              title: displayTitle(route.params),
            })}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
