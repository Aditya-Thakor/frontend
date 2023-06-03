import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchEmail = async (email: string) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/validate-email",
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

export const addUser = async (data: object) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/add-user",
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

export const validateUser = async (data: object) => {
  try {
    const res = await axios({
      url: SERVER_URL + "/validate-user",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...data },
    });
    return res.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
