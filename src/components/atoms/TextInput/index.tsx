import { View, TextInput, TextInputProps } from "react-native";
import styles from "./style";
import { useState } from "react";

export default function CustomTextInput(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <TextInput
        {...props} 
        style={[styles.inputs, isFocused && styles.isfocused, props.style]}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
      />
    </View>
  );
}
