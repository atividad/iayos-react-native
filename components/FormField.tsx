import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TextInputProps,
} from "react-native";

import { icons } from "../constants";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string; // Optional additional styles
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles = "",
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base  font-pmedium color-primary ">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-solid border-2 border-blue-100 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1   color-white font-psemibold text-base border-orange-700"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B" 
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
