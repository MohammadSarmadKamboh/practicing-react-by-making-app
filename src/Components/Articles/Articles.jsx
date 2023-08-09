import { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "./Articles.css";

const Articles = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Check if data exists in sessionStorage
      const cachedData = sessionStorage.getItem(`data-page-${page}`);
      const cachedTotalPages = sessionStorage.getItem("total-pages");
      if (cachedData && cachedTotalPages) {
        setData(JSON.parse(cachedData));
        setTotalPages(parseInt(cachedTotalPages));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://jsonmock.hackerrank.com/api/articles?page=${page}`
        );

        const jsonData = await response.json();
        setData(jsonData.data);
        setTotalPages(jsonData.total_pages);

        // Store data and totalPages in sessionStorage
        sessionStorage.setItem(`data-page-${page}`, JSON.stringify(jsonData.data));
        sessionStorage.setItem("total-pages", jsonData.total_pages.toString());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    // Clear sessionStorage when component mounts
    sessionStorage.clear();
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="card-container">
            {data.map((item) => (
              <Card
                key={item.created_at}
                title={item.title}
                url={item.url}
                author={item.author}
                num_comments={item.num_comments}
                created_at={item.created_at}
              />
            ))}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default Articles;
