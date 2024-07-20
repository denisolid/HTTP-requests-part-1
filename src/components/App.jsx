import { useEffect, useState } from "react";
import List from "./List/List";
import { fetchNews } from "../services/api";
import { SearchBar } from "./SearchBar/SearchBar";
import { LineWave } from "react-loader-spinner";

export const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchNews(query, 5);
        setHits((prev) => [...prev, ...response.hits]);
        setTotal(response.nbPages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setHits([]);
    setPage(0);
  };
  return (
    <div>
      {total > page && !isLoading && <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>]}
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && (
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      )}
      {isError && <p>Something went wrong! Try again...</p>}
      <List items={hits} />
      
    </div>
  );
};

// useEffect(() => {
//   axios
//     .get("https://hn.algolia.com/api/v1/search?query=react")
//     .then((res) => setHits(res.data.hits))
//     .catch();
// }, []);
