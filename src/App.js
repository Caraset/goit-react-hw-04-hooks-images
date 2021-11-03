import Loader from './components/Loader';
import { useState, useEffect } from 'react';

import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import fetchImages from './services/images-api';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [modalImg, setModalImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    fetchImages(query, page)
      .then(res => {
        setImages(prev => [...prev, ...res.hits]);
        if (page !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(res => {
        console.log(res);
      })
      .finally(() => setIsLoading(false));
  }, [page, query]);

  function openModal(modalImg) {
    setShowModal(true);
    setModalImg(modalImg);
  }

  function onSearchSubmit(value) {
    if (value === query) {
      alert('already loaded');
      return;
    }
    setQuery(value);
    setPage(1);
    setImages([]);
  }

  return (
    <div className="App">
      <Searchbar onSubmit={onSearchSubmit}></Searchbar>
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {images.length !== 0 && isLoading !== true && (
        <Button
          onMoreClick={() => {
            setPage(prev => prev + 1);
          }}
        />
      )}
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
          modalImg={modalImg}
        />
      )}
    </div>
  );
}

export default App;
