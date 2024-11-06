import axios from 'axios';
import { API_URL } from './apiUrl';

export const fetchBalance = async (walletAddress: string) => {
  const { data } = await axios.get(`${API_URL}/accounts/${walletAddress}`);
  return (data.balance / 1_000_000_000).toFixed(2);
};