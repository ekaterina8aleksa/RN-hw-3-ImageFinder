import axios from "axios";
// import PropTypes from "prop-types";

const apiKey = "16137003-a99878a83e3cf9a5973a72148";

const fetchImg = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}&page=${currentPage}`
    )
    .then((response) => response.data.hits);
};

// fetchImg.propTypes = {
//     searchQuery: PropTypes.string.isRequired,
// };

export default { fetchImg };
