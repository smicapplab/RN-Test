import { useContext } from "react";
import { Alert, StyleSheet, Text, View } from "react-native"
import SearchForm from "../components/SearchForm"
import { LyricsContext } from "../store/lyrics-context";
import { getData } from "../util/axiosutil"

const SearchScreen = ({ navigation }) => {

    const searchHistoryCtx = useContext(LyricsContext);

    const searchLyricHandler = async (searchData) => {
        const response = await getData(searchData)
        if (response && response.error) {
            Alert.alert("Sorry we could not find this song.  Please try another one.")
        } else {
            //searchHistoryCtx.addSearches(searchData)
            navigation.navigate('ViewLyric', {
                title: searchData.title,
                lyrics: response.lyrics
            });
        }
    }

    return <View style={classes.container}>
        <SearchForm onPress={searchLyricHandler} />
    </View>
}

export default SearchScreen

const classes = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        flexDirection: "row"
    }
})