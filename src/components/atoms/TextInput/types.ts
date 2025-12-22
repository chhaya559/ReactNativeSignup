import { TextInputProps } from "react-native"; 
 type Props = {
    placeholder : string,
    placeholderTextColor : string,
    value : string,
    onChangeText ?: TextInputProps["onChangeText"],
    onChange ?: TextInputProps["onChange"],
    onBlur ?:TextInputProps["onBlur"],
    autoCapitalize ?: TextInputProps["autoCapitalize"]
}

export default Props;