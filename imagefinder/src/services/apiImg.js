import axios from "axios";
// import PropTypes from "prop-types";
// axios.defaults.baseURL = "https://pixabay.com/api/";

const apiKey = "16137003-a99878a83e3cf9a5973a72148";

const fetchImg = ({ searchQuery, currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${pageSize}&key=${apiKey}&page=${currentPage}`
    )
    .then((response) => response.data.hits);
};

// fetchImg.propTypes = {
//     searchQuery: PropTypes.string.isRequired,
// };

export default { fetchImg };
