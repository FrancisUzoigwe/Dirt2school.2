import axios from "axios";

const url: string = "http://localhost:2345";

export const registerApi = async (data: any) => {
  try {
    const config: any = {
      "content-type": "multi-part/formdata",
    };
    return await axios
      .post(`${url}/api/register`, data, config)
      .then((res: any) => {
        return res.data?.data;
      });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const loginApi = async (data: any) => {
  try {
    return await axios.post(`${url}/api/signin`, data).then((res: any) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};
