import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SectionList,
} from "react-native";
import colors from "../styles/colors";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../Components/AppText";

export default function RewardsMenu({ DATA, navigation, score }) {
  const renderItem = ({ item }) => {
    const isDisabled = score < item.requiredPoints;
    const opacity = isDisabled ? 0.5 : 1;

    return (
      <TouchableOpacity
        style={[styles.item, { opacity: opacity }]}
        onPress={() => {
          if (!isDisabled) {
            navigation.navigate("RewardsDishScreen", { item: item });
          }
        }}
      >
        <View style={{ flex: 1 }}>
          <AppText style={styles.dish}>{item.product.name}</AppText>
          <AppText style={styles.dishText}>{item.product.info}</AppText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AppText
                style={[
                  styles.dishPrice,
                  { textDecorationLine: "line-through" },
                ]}
              >
                ${item.product.price}
              </AppText>
              <AppText style={[styles.dishText, { marginLeft: 5 }]}></AppText>
            </View>
            <AppText style={[styles.dishText, { marginLeft: 10 }]}>
              {item.requiredPoints + "pt"}
            </AppText>
          </View>
        </View>
        <Image source={item.product.img} style={styles.dishImage} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <SectionList
        contentContainerStyle={{ paddingBottom: 50 }}
        keyExtractor={(item) => `${item.product.id}`}
        scrollEnabled={false}
        sections={DATA}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginHorizontal: 16,
              height: 1,
              backgroundColor: colors.light,
            }}
          />
        )}
        SectionSeparatorComponent={() => (
          <View style={{ height: 2, backgroundColor: colors.light }} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        style={{ backgroundColor: colors.light }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    margin: 16,
  },
  item: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dishImage: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  dish: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dishText: {
    fontSize: 14,
    color: colors.dark,
    paddingVertical: 4,
  },
  dishPrice: {
    fontSize: 14,
    color: colors.dark,
    fontWeight: "bold",
  },
});
