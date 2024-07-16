import axios from "axios";

const emailUrl = import.meta.env.VITE_EMAIL_URL;

export const fetchEmailDB = async (data) => {
  try {
    const today = { ...data, date: new Date().toISOString().slice(0, 10) };
    const res = await axios.post(`${emailUrl}/OregonTours.json`, today);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
