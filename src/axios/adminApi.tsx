import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const showAdmin = async () => {
  const res = await axios({
    url: SERVER_URL + "/show-admin",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const adminEmail = async (data: object) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/email-admin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { data },
    });
    console.log(res);

    return res.data.valid;
  } catch (error) {
    console.log("Error While Validate User");
  }
};

export const singleAdmin = async (id: number | string) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/single-admin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { id },
    });

    return res.data;
  } catch (error) {
    console.log("Error While add to cart");
  }
};

export const addAdmin = async (data: object) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/add-admin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...data },
    });

    return res.data.valid;
  } catch (error) {
    console.log("Error in adduser");
  }
};

export const updateAdmin = async (data: any) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/update-admin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...data },
    });

    return res;
  } catch (error) {
    console.log("Error While add to cart");
  }
};

export const deleteAdmin = async (id: number) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/delete-admin",
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

export const validateAdmin = async (data: object) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/validate-admin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...data },
    });
    return res.data;
  } catch (error: unknown) {
    console.log("Error in Validate user");
  }
};
