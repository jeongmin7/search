import axios from 'axios';

const getData = async (keyword: string) => {
  if ('caches' in window) {
    const cacheStorage = await caches.open('sick');
    const cachedResponse = await cacheStorage.match(keyword);
    if (!cachedResponse) {
      console.info('calling api!');
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`, {
        params: {
          q: keyword,
        },
      });
      const store = response.data;
      // 데이터 없는 경우
      cacheStorage.put(keyword, new Response(JSON.stringify(store)));
      return store;
    }
    const cached = await cachedResponse?.json();
    // 데이터 있는 경우
    return cached;
  }
  return [];
};
export default getData;
