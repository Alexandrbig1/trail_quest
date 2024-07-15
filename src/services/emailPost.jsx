import axios from "axios";

const { EMAIL_URL } = import.meta.env;

export const fetchEmailDB = async (data) => {
  try {
    const res = await axios.post(`${EMAIL_URL}/CampersRequest.json`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
