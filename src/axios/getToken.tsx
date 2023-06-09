import axios from "axios";
import { useState } from "react";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const getTokenApi = async (data: object) => {
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
  } catch (error: unknown) {
    console.log("Error in Validate user");
  }
};
