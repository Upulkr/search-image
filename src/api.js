import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: " Client-ID ZPfY5RkWjr9EtsBcXoches9DRpqRjg8bEdY1h7zwGG8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
