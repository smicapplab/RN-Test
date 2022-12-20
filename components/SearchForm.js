import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "./Button"
import Input from "./Input"

const SearchForm = ({ onPress }) => {
    const [searchdata, setSearchdata] = useState({
        artist: "",
        title: ""
    })

    const inputChangeHandler = (name, value) => {
        setSearchdata((currData) => {
            return {
                ...currData,
                [name]: value,
            };
        });
    }

    const handleBtnPress = () => {
        onPress(searchdata)
    }

    return (
        <View style={classes.searchContainer}>
            <Text style={classes.title}>Find Lyric</Text>
            <Input label="Artist" textInputProps={{
                onChangeText: inputChangeHandler.bind(this, "artist"),
                value: searchdata.artist,
            }} />
            <Input label="Song Title" textInputProps={{
                onChangeText: inputChangeHandler.bind(this, "title"),
                value: searchdata.title,
            }} />
            <View style={classes.button}>
                <Button style={classes.button} onPress={handleBtnPress}>
                    Search
                </Button>
            </View>
        </View>
    )
}

export default SearchForm

const classes = StyleSheet.create({
    searchContainer: {
        flex: 1,
        backgroundColor: "white",
        padding: 7,
        margin: 6,
        borderRadius: 6,
    },
    title: {
        fontWeight: "bold"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
        margin: 8,
    },
})
