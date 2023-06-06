import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const singleProduct = async (id: number) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/single-product",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { prod_id: id },
    });

    return res.data;
  } catch (error) {
    console.log("Error While add to cart");
  }
};

export const showCart = async (id: string | number) => {
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
