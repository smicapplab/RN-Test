import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LyricScreen from './screens/LyricScreen';
import SearchScreen from './screens/SearchScreen';
import LyricsContextProvider from './store/lyrics-context';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <LyricsContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SearchLyric" component={SearchScreen}
            options={{
              title: 'Search Lyric'
            }}
          />
          <Stack.Screen name="ViewLyric" component={LyricScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LyricsContextProvider>
  )
}