import { StatusBar, ScrollView } from 'react-native';
import Home from './components/Home';

export default function App() {
  return (
    <ScrollView>
      <StatusBar hidden={false} backgroundColor='#808080' style={{ height: StatusBar.currentHeight }} />
      <Home/>
    </ScrollView>
  );
}
