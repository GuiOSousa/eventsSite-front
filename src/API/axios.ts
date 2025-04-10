import axios from "axios"

const AxiosAPI = axios.create({
	baseURL: "http://localhost:3000"
})

export default AxiosAPI