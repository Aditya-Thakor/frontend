import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const addToCart = async (data: any) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/add-to-cart",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { data },
    });

    return res.data.valid;
  } catch (error) {
    console.log("Error While add to cart");
  }
};

export const showCart = async (id: any) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/show-cart",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      data: { id },
    });

    return res.data;
  } catch (error) {
    console.log("Error While showing cart");
  }
};
