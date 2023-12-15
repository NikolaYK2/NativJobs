import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Home} from "@/features/Home";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Home/>
        <StatusBar style="auto"/>
      </View>
    </SafeAreaProvider>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
