import axios from "axios";

export async function getUserDetails(id) {
  try {
    const { data } = await axios.get(`${process.env.VUE_APP_URL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
