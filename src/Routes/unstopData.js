import axios from "axios";

export const getUnstopData = async () => {
  const response = await axios.get("https://unstop.com/api/public/competition/1225647?round_lang=1");
  return response.data;
};