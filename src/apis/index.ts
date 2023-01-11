import axios from 'axios';

const getData = async (keyword: string) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`, {
    params: { q: keyword },
  });
  return response.data;
};

export default getData;
