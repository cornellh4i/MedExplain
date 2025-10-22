import React, { forwardRef } from "react";
import { TextInput, TextInputProps, View} from "react-native";


const SearchBar = forwardRef<TextInput, TextInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <View>
        <TextInput className={`border-2 border-gray-300 w-4/5 rounded-md p-2 font-medium ${className}`} ref={ref} placeholderTextColor="#6b7280" {...props} />
      </View>
    );
  }
);


export default SearchBar;
