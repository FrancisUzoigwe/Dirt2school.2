import axios from "axios";

const url: string = "http://localhost:2345/api";

export const registerApi = async (data: any) => {
  try {
    const config = {
      "content-type": "multi-part/formdata",
    };
    return await axios
      .post(`${url}/register`, config, data)
      .then((res: any) => {
        return res.data?.data;
      });
  } catch (error: any) {
    console.log(error?.message);
  }
};
