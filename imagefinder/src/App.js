import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Container from "./common/Container";
import ImageGalleryList from "./components/ImageGallery";
import Modal from "./common/Modal";
import Button from "./common/Button";
import Spinner from "./common/Loader";
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
    modalImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }

    if (prevState.images.length > 12) {
      this.scrollTo();
    }
  }

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
    });
  };

  fetchImg = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    if (!searchQuery || searchQuery === " ") {
      toast.warn(`Oooopsy, something went wrong  =( `);
      return;
    }

    this.setState({ isLoading: true });

    ApiImg.fetchImg(options)
      .then((hits) => {
        if (hits.length === 0) {
          toast.warn(`No more images to show =(`);
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...hits],
            currentPage: prevState.currentPage + 1,
          }));
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
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

        <Container>
          {error &&
            toast.warn(`Error is discipline through which we advance ${error}`)}

          {images.length > 0 && (
            <ImageGalleryList images={images} onImgClick={this.openModal} />
          )}

          {showLoadMoreBtn && (
            <Button nameBtn={"Load More"} onLoadMoreBtnClick={this.fetchImg} />
          )}

          {isLoading && <Spinner />}

          {showModal && (
            <Modal onClose={this.closeModal}>
              <img src={modalImage} alt="" />
            </Modal>
          )}
        </Container>
      </>
    );
  }
}

export default App;
