import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const addProduct = async (data: any) => {
  console.log(data);

  try {
    const res = await axios({
      url: SERVER_URL + "/add-product",
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: { ...data },
    });

    return res.data.valid;
  } catch (error) {
    console.log("Error While add to cart");
  }
};
