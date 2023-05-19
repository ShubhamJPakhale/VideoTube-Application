export const YouTube_API_Key = "AIzaSyAayH14GTu7UCd89j72D1D5XInGMjzGx34";
export const Youtube_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YouTube_API_Key;

//maxResults=50 -> added in to youtube api for getting maximum 50 videos data by passing this as a query parameter

export const Youtube_Video_Data =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=&key=" +
  YouTube_API_Key;
