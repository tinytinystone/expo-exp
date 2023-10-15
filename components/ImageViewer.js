import { Image, StyleSheet } from "react-native";

export default function ImageView({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={imageSource} style={styles.kim} />;
}

const styles = StyleSheet.create({
  kim: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
