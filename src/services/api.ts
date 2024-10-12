import axios from "axios";

const API_KEY = "20b454ed"; // OMDb API anahtarınızı buraya ekleyin
const base_url = "https://www.omdbapi.com/";

export const fetchMovies = async (searchQuery: string) => {
  try {
    // Arama sorgusunu URL parametreleri olarak ayarlayın
    const response = await axios.get(base_url, {
      params: {
        s: searchQuery, // Arama terimi
        apikey: API_KEY,
      },
    });

    // API yanıtından 'Search' dizisini döndür, yoksa boş dizi döndür
    return response.data.Search || [];
  } catch (error) {
    alert("Error fetching movies: " + error); // Hata durumunda kullanıcıya bilgi ver
    return []; // Hata durumunda boş dizi döndür
  }
};