import React, { forwardRef } from "react";
import { TextInput, TextInputProps, View} from "react-native";


const SearchBar = forwardRef<TextInput, TextInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <View>
        <TextInput className={`border-[0.5px] border-[#ccc] w-4/5 rounded-[10px] p-[14px] text-[18px] ${className}`} ref={ref} placeholderTextColor="#6b7280" {...props} />
      </View>
    );
  }
);


export default SearchBar;
