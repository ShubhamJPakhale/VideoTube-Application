export const ykey = process.env.REACT_APP_Secret_YKey;
console.log(ykey);
export const YApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  ykey;

//maxResults=50 -> added in to youtube api for getting maximum 50 videos data by passing this as a query parameter

export const y_video_data =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=&key=" +
  ykey;

export const VT_Search_suggestion_Api =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
