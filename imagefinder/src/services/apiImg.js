import axios from "axios";

const root = "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
const apiKey = "16137003-a99878a83e3cf9a5973a72148";

const fetchImg = ({ searchQuery, currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      root +
        ` &q=${searchQuery}&per_page=${pageSize}&key=${apiKey}&page=${currentPage}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImg };
