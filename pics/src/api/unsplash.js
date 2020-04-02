import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2tP41VYBz-4JtewfNDgIu970Ioehzb--yboaou4-FyM'
  }
});
