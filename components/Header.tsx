import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Button, Text, Image, Pressable } from "react-native";
import IconButton from "./ui/IconButton";
import { Colors } from "../constants/Colors";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUser } from "../constants/firebase/dataQueries";
import { fonts } from "../constants/fonts";

export const BackButton = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <IconButton
        name="arrow-left"
        size={24}
        color="white"
        onPress={goBack}
        iconColor="black"
      />
    </View>
  );
};

export const Title: React.FC = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export const Header = ({ navigation }) => {
  const [search, setSearch] = React.useState();
  const users = async () => {
    const user = await getUser();
    setSearch(user);
  };
  console.log(search);

  useEffect(() => {
    users();
  }, []);
  console.log(search);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontFamily: fonts.main,
            fontSize: 15,
          }}>
          Hi, {search && search.Name}
        </Text>
        <Text style={{ fontFamily: fonts.extrabold, fontSize: 20 }}>
          Good Morning !
        </Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Profile");
        }}>
        <Image
          style={{
            borderWidth: 1,
            borderColor: Colors.secondary,
            width: 40,
            height: 40,
            borderRadius: 25,
          }}
          source={{
            uri: search
              ? search.profilePic
              : "https://images.unsplash.com/photo-1610559176044-d2695ca6c63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2138&q=80",
          }}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.secondary,
  },
});
