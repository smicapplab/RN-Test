import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, textInputProps }) => {
    return (
        <View style={classes.inputContainer}>
          <Text style={classes.label}>{label}</Text>
          <TextInput style={classes.input} {...textInputProps} />
        </View>
      );
}

export default Input

const classes = StyleSheet.create({
    inputContainer: {
      marginHorizontal: 4,
      marginVertical: 8
    },
    label: {
      fontSize: 12,
      marginBottom: 4,
    },
    input: {
      padding: 6,
      borderRadius: 6,
      fontSize: 18,
      backgroundColor: "#cccccc"
    }
  });