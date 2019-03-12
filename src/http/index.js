import axios from 'axios';
import config from '@/config';

export default {
  login(data) {
    return axios.post(`${config.API_BASE}/admin/login`, data);
  },
  getAdminInfo() {
    return axios.get(`${config.API_BASE}/admin/getInfo`);
  },
};