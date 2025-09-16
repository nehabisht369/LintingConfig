import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  function testFn() {
    // extra whitespaces
    x = 1; // x is not defined, therefore it won't be able to return its value in next line
    return x;
    // x = 3; // this will never execute
  }

  const obj = { foo: "1", bar: "2" }; // remove duplicate key in object
  // can be accessed, but only the last value will be retained

  return (
    <View style={styles.container}>
      <Text>{testFn()}</Text>
      <Text style={{ color: "green", fontSize: 28 }}>
        Access value of duplicate Object key: - {obj.foo}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
