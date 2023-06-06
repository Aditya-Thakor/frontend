import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const addProduct = async (data: object) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/add-product",
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: { ...data },
    });

    return res;
  } catch (error) {
    console.log("Error While add to cart");
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/delete-product",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: { id },
    });

    return res.data.valid;
  } catch (error) {
    console.log("Error While delete product");
  }
};
export const viewProducts = async () => {
  try {
    const res = await axios({
      url: SERVER_URL + "/view-products",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.log("Error While fetch product");
  }
};
export const updateProduct = async (data: object) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/update-product",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: { ...data },
    });

    return res.data.valid;
  } catch (error) {
    console.log("Error While update to product");
  }
};
