import axios from "axios";

export default {
  searchTerms: function(query) {
    return axios.get(
      "x" + query
    );
  }

};
