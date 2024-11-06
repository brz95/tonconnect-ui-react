import axios from "axios";
import { API_URL } from "./apiUrl";

export const checkAddressExists = async (walletAddress: string) => {
  const { data } = await axios.get(`${API_URL}/accounts/${walletAddress}`);
  return data;
};
