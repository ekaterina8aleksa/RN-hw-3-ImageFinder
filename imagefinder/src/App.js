import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGalleryList from "./components/ImageGallery";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Loader from "./components/Loader";
import ApiImg from "./services/apiImg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    ApiImg.fetchImg(options)
      .then((hits) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  openModal = (largeImageURL) => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  closeModal = () => {
    return this.setState({
      showModal: false,
      modalImage: "",
    });
  };

  render() {
    const { images, isLoading, error, showModal, modalImage } = this.state;
    const showLoadMoreBtn = images.length > 0 && !isLoading;

    return (
      <>
        <ToastContainer />

        <SearchBar onSubmit={this.onChangeQuery} />

        {error &&
          toast.warn(`Error is discipline through which we advance ${error}`)}

        {images.length > 0 && (
          <ImageGalleryList images={images} onImgClick={this.openModal} />
        )}

        {showLoadMoreBtn && (
          <Button nameBtn={"Load More"} onClick={this.fetchImages} />
        )}

        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
