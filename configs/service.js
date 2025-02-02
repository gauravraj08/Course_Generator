import axios from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";
// console.log("api key");
// console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_KEY);

const getVideos = async (query) => {
  const params = {
    part: "snippet",
    q: query,
    maxResults: 1,
    type: "video",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };

  const resp = await axios.get(YOUTUBE_BASE_URL + "/search", { params });
  console.log(resp);

  return resp.data.items;
};

export default {
  getVideos,
};
