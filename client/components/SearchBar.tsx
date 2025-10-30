import React, { forwardRef } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Search } from "lucide-react-native";

const SearchBar = forwardRef<TextInput, TextInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <View
        className={`flex-row items-center bg-white rounded-[4px] w-[359px] p-[16px] ${className}`}
        style={{ gap: 8 }}
      >
        {/* Search Icon */}
        <Search size={20} color="#575757" />

        {/* Input Field */}
        <TextInput
          ref={ref}
          className="flex-1 text-[16px] text-[#575757]"
          placeholderTextColor="#A1A1A1"
          {...props}
        />
      </View>
    );
  }
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
