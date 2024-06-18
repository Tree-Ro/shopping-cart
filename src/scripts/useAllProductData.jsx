import { useState, useEffect } from 'react';

const useAllProductData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch('https://fakestoreapi.com/products', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(error);
          setIsLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, error, isLoading };
};

export default useAllProductData;
