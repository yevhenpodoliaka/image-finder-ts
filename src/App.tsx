import React, { useEffect, useState } from "react";
import "./App.css";
import { Image } from "./type";
import { Gallery } from "./components/Gallery/Gallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Modal } from "./components/Modal/Modal";
import { Message } from "./components/Message/Message";
import { Loader } from "./components/Loader/Loader";
import fetchImg from "./service/apiService";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [items, setItems] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  useEffect(() => {
    if (query === "") {
      return;
    }

    setLoading(true);

    fetchImg(query, page)
      .then((data: any) => {
        setItems((prevState) => [...prevState, ...data.hits]);
        setTotalHits(data.totalHits);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [page, query]);

  const onSubmitQuery = (value: string): void => {
    if (value.trim() === "") {
      return;
    }
    setQuery(value);
    setPage(1);
    setItems([]);
  };
  const handlerBtnLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const showBtnLoadMore = () => {
    if (loading) {
      return false;
    }
    if (items.length === totalHits) {
      return false;
    }
    if (totalHits > items.length) {
      return true;
    }
  };
  const closeModal = () => {
    setLargeImageURL("");
  };
  return (
    <div className="App">
      <SearchBar onSubmitQuery={onSubmitQuery} />

      {totalHits === 0 ? (
        <Message />
      ) : (
        <Gallery images={items} setImageURL={setLargeImageURL} />
      )}
      <Loader visible={loading} />
      {showBtnLoadMore() && <LoadMoreBtn onClick={handlerBtnLoadMore} />}
      {largeImageURL && (
        <Modal onClose={closeModal}>
          <img src={largeImageURL} alt={query} />
        </Modal>
      )}
    </div>
  );
}

export default App;
