import { useLayoutEffect } from "react"
import { StyleSheet, Text, View } from "react-native"

const LyricScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title
        }, []);
    }, []);

    return <View style={classes.container}>
        <Text>
            { route.params.lyrics }
        </Text>
    </View>

}


export default LyricScreen

const classes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 7,
        margin: 6,
        borderRadius: 6,

    }
})