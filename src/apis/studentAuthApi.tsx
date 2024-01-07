import axios from "axios";
// import { useSelector } from "react-redux";

const url: string = "https://dirt2school-app.onrender.com";
// const url: string = "http://localhost:2345";

// export const fetchApi = async (studentID: any) => {
//   const user = useSelector((state: any) => state.mainStudent?.email);
//   console.log(user);
//   try {
//     return await axios
//       .get(`${url}/api/get-one${studentID}`)
//       .then((res: any) => {
//         return res.data;
//       });
//   } catch (error: any) {
//     console.log(error?.message);
//   }
// };

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
