import axios from "axios";

export async function getUsers() {
  try {
    const { data } = await axios.get(process.env.VUE_APP_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
}
