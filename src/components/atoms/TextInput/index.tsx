import { View, TextInput, TextInputProps } from "react-native";
import Props from "./types";
import styles from "./style";
import { useState } from "react";

export default function CustomTextInput(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <TextInput
        style={[styles.inputs, isFocused && styles.isfocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      />
    </View>
  );
}
