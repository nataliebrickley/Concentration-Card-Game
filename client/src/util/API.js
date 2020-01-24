import axios from "axios";

export default {
  shuffle: function() {
    return axios.get("/api/shuffle")
  }
}