import * as React from "react";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";

type Props = TextInputProps & {
  containerStyle?: object;
  iconSize?: number;
};

const SearchBar = React.forwardRef<TextInput, Props>(
  ({ iconSize = 16, className, ...props }, ref) => {
    return (
      <View>
        <TextInput ref={ref} placeholderTextColor="#6b7280" {...props} />
      </View>
    );
  }
);

SearchBar.displayName = "SearchBar";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#e5e7ee",
    borderRadius: 8,
    maxWidth: 350,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 0,
    fontSize: 16,
  },
});

export default SearchBar;
