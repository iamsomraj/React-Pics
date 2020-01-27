import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID dc0ef517e096fe79cf916846b01dd6d6acbd1fb9b718470c516611f0964ac3da'
  }
});
