import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ style, children, onPress }) => {
    return (
        <View style={style}>
          <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && classes.pressed}
          >
            <View style={classes.button}>
              <Text style={classes.buttonText}>
                {children}
              </Text>
            </View>
          </Pressable>
        </View>
      )
}

export default Button 

const classes = StyleSheet.create({
    button: {
      borderRadius: 4,
      padding: 8,
      backgroundColor: "#007500",
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    pressed: {
      opacity: 0.75,
      backgroundColor: "#00A300",
      borderRadius: 4,
    },
  });