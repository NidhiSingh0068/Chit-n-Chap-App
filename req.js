const axios = require("axios").default;
axios.get("https://api.github.com/user/NidhiSingh0068").then((response) => {
    console.log(response);
});