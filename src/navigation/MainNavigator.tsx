import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {Platform, Text, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import ChapterScreen from '../screens/ChapterScreen';
import {StackNavigator} from '../types';

const MainNavigator = (): React.ReactElement => {
  const scheme = useColorScheme();

  const Stack = createNativeStackNavigator<StackNavigator>();

  const displayTitle = (params: any) => {
    const chapter = params.chapter ? `#${params.chapter}` : '';
    const chapterTitle = params.title;
    const title = chapterTitle ? `${chapter} - ${chapterTitle}` : chapter;

    return title;
  };

  const modalOptions = (route: any, navigation: any) => {
    return Platform.OS === 'ios'
      ? {
          headerTitle: displayTitle(route.params),
          headerLeft: () => <Text onPress={() => navigation.goBack()}>❌</Text>,
        }
      : {headerTitle: displayTitle(route.params)};
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Manga List by MangaDex'}}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            // @ts-ignore
            options={({route}) => ({
              title: route.params?.title,
              headerBackTitle: 'Back',
            })}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="ChapterScreen"
            component={ChapterScreen}
            options={({route, navigation}) => modalOptions(route, navigation)}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
