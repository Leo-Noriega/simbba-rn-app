import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SERVER_URL = "http://simbba-env.eba-3try2umm.us-east-1.elasticbeanstalk.com/";
const APP_JSON = "application/json";

const AxiosClient = axios.create({
  baseURL: SERVER_URL,
});

const requestHandler = async (request) => {
  request.headers["Accept"] = APP_JSON;
  request.headers["Content-Type"] = APP_JSON;
  const session = JSON.parse(await AsyncStorage.getItem("session"));
  if (session?.token)
    request.headers["Authorization"] = `Bearer ${session.token}`;
  return request;
};

AxiosClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => Promise.reject(error)
);

AxiosClient.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => Promise.reject(error)
);

export default AxiosClient;
