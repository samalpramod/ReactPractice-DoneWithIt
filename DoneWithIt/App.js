import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,TouchableNativeFeedback, View,SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  console.log(require("./assets/icon.png"));
  
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      title='Tap me'  
      color="orange" 
      onPress={() => Alert.alert("My Alert", "Do you want to ?",[
        {text:"Yes", onPress:() => console.log("Pressed Yes")},
        {text:"No", onPress:() => console.log("Clicked No")},
        ])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'

  },
});
