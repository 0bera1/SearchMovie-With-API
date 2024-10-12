import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import HomeScreen from './src/screens/HomeScreen';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    <HomeScreen />
  );
}
export default withExpoSnack(App);