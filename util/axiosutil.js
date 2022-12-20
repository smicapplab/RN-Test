import axios from "axios"

//const lyricUrl = "https://api.lyrics.ovh/v1"
const lyricUrl = "https://private-anon-072b2cdb3a-lyricsovh.apiary-mock.com/v1"
export const getData = async ({ artist, title }) => {
    try{
        const url = `${lyricUrl}/${artist}/${title}`
        const response = await axios.get(url)
        return response.data    
    }catch(error){
        console.error(error)
        return { error: "Song not found" }
    }

}