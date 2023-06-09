import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const adminEmail = async (email: string) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/email-admin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email },
    });

    return res.data.valid;
  } catch (error) {
    console.log("Error While Validate User");
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

    return res.data.status;
  } catch (error) {
    console.log("Error in adduser");
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
