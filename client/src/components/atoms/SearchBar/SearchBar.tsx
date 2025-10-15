import * as React from "react";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";
import {Search} from "lucide-react-native";

// Temporary disabled as className is not supported
// type Props = TextInputProps & { className?: string };

type Props = TextInputProps & {
  containerStyle?: object;
  iconSize?: number;
};


const SearchBar = React.forwardRef<TextInput, Props>(
  ({ style, containerStyle, iconSize = 16, ...props }, ref) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <Search size={iconSize} />
        <TextInput
          ref={ref}
          style={[styles.input, style]}
          placeholderTextColor="#6b7280"
          {...props}
        />
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


