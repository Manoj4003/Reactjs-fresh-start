import axios from "axios";
import  { useEffect, useState } from "react";

// export default function useFetch(url) {
//   let [products, setProducts] = useState([]);
//   let [error, setError] = useState("");
//   let [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     let fetchApi = async () => {
//       try {
//         let response = await fetch(url);
//         if (response.ok) {
//           let data = await response.json();
//           setProducts(data);
//         } else {
//           return new Error("Data not Found");
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchApi();
//   }, []);
//   return {products,error,isLoading}
// }


export default function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
        let response =await axios.get(url)
        setProducts(response.data)
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);
  return {products,error,isLoading}
}
