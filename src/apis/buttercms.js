import axios from "axios"

export const buttercms = axios.create({
  baseURL: "https://api.buttercms.com/v2",
})

export const axiosConfig = {
  params: {
    auth_token: "d565a0c2dc2810e75b713cb303decf96cf6efc17",
  },
}
