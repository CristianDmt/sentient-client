import axios from 'axios';
import { API_BASE_PATH } from '../const';

export default axios.create({
  baseURL: API_BASE_PATH
});