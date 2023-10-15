import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";

export default function EmojiList({ onSelect, onClose }) {
  const [emoji] = useState([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.listContainer}
      data={emoji}
      renderItem={({ item, idx }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onClose();
          }}
        >
          <Image source={item} key={idx} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  image: { width: 100, height: 100, marginRight: 20 },
});
