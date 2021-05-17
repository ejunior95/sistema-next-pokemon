// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }
