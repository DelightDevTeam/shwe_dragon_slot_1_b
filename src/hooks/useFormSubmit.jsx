import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const useFormSubmit = async (url, inputData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      setLoading(true);
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
          body: JSON.stringify(inputData),
          signal,
        });

        if (!res.ok) {
          let errorData;
          try {
            errorData = await res.json();
          } catch (error) {
            console.error(error);
          }
          
          if (res.status === 422) {
            console.log(res.status);
          }

          throw Error(errorData ? errorData.message : "Something Went Wrong!");
        }

        const responseData = await res.json();
        setData(responseData.data);
        console.log(data);
      } catch (e) {
        setError(e.message);
        console.error(e);
        // navigate('/login');
      } finally {
        setLoading(false);
      }

      // Cleanup function
      return () => {
        abortController.abort();
      };
    };

    fetchData();
  }, [url, inputData]);

  return { data, loading, error };
};

export default useFormSubmit;
