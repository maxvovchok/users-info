import axios from "axios";

export async function getUsers() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
