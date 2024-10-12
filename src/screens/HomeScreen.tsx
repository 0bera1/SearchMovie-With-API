import { View, Text, TextInput, TouchableOpacity, FlatList, Image, } from 'react-native'
import React, { useState } from 'react'
import { fetchMovies } from '../services/api';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledButton = styled(TouchableOpacity)
const StyledImg = styled(Image)

const HomeScreen: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [movies, setMovies] = useState<any[]>([]);

    const handleSearch = async () => {
        const results = await fetchMovies(searchQuery);
        setMovies(results);
    }
    return (
        <StyledView
            className='flex-1 p-4 bg-gray-200 flex'
        > {/*<-- ŞU İŞARETTEN SONRASINA KOY YORUM SATIRINI*/} 
            <StyledText
                // BURADA KULLANIRSAN HATA VERİR
                className='ml-1 text-lg font-light mt-10 text-gray-800'
            > {/* Textlerin arasında kullanırsan da hata alabilirsin*/}
                Search Film & Series</StyledText> 
            <StyledTextInput
                className='h-11 border-gray-500 mt-2 pl-2 border-2 rounded-xl'
                placeholder='Search Film or Series...'
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            {/* button */}

            <StyledButton
                className='h-8 bg-gray-700 mt-2 rounded-xl items-center justify-center w-full'
                onPress={handleSearch}
            >
                <StyledText
                    className='text-gray-200 justify-center'
                >Search</StyledText>
            </StyledButton>
            {/* FlatList */}
            <FlatList
                style={{ width: '100%' }}
                data={movies}
                keyExtractor={(item) => item.imdbID}
                renderItem={({ item }) => (
                    <StyledView
                        className='flex flex-row mt-4'
                    >
                        <StyledImg
                            source={{ uri: item.Poster }}
                            style={{ width: 100, height: 150 }}
                            className="mr-4 object-cover"
                        />
                        <StyledView 
                        className='flex flex-col '
                        >
                            <StyledText className=" text-lg ">{item.Title}</StyledText>
                            <StyledText className="text-gray-500">{item.Year}</StyledText>
                            <StyledText className="text-gray-500">{item.Type}</StyledText>
                        </StyledView>

                    </StyledView>

                )}
            />


        </StyledView>
    )
}

export default HomeScreen