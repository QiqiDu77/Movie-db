import React, { useState, useContext, useEffect } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

//通过urlParams来判断是query还是i
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      const data = await response.json();
      //   console.log(data);
      if (data.Response === 'True') {
        //匹配是搜索或者是单部电影
        setData(data.Search || data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  return { isLoading, error, data };
};

export default useFetch;
