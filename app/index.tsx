import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";

const Index = () => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"red" }}>
        <ThemedText>Salut</ThemedText>
      </View>
    </SafeAreaView>
  );
};

export default Index;
