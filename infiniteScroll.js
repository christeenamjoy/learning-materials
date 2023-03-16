import { useState, useRef, useEffect } from "react";

export default function InfiniteList({ items = [], batchLimit = 10 }) {
  const [currentBatch, setCurrentBatch] = useState(items.slice(0, batchLimit));
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentBatch(items.slice(0, batchLimit * page));
  }, [page, batchLimit, items]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 10
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div
      className="infinite-list-container"
      ref={containerRef}
      onScroll={handleScroll}
    >
      {currentBatch.map((item) => (
        <div key={item.id}>
          <div>
            {item.first_name} {item.last_name}
          </div>
        </div>
      ))}
    </div>
  );
}
