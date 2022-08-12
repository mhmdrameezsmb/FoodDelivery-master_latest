import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, WelcomeScreen,SigninScreen,SignupScreen, ForgetPass} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ 
            headerShown: false,
          }}
        />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Sign"
        component={SigninScreen}
        options={{
          headerShown: false,
        }}
      />
   <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
   <Stack.Screen
        name="forg"
        component={ForgetPass}
        options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
