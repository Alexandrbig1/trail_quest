import axios from "axios";

const { EMAIL_URL } = import.meta.env;

export const fetchEmailDB = async (data) => {
  try {
    console.log(data);
    const res = await axios.post(`${EMAIL_URL}/OregonTours.json`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
