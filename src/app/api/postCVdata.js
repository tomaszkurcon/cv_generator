import axios from "axios";

export const postCvData = (data) => {
  return axios({
    method: "post",
    url: "http://localhost:3001/test",
    data: data,
  }).then(({ data }) => data);
};

// export const postCvData = (data) => fetch()
