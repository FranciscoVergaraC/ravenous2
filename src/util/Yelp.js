const apiKey = "ftNcCv-0Yf-M_g8FasiAgrC7b4oVJsSxiLBKvcgTqGvELKgFRLyvTGih1XFak4KbLxy3MsgYr2hRgsuNhJtriD1nOKfhU-cglssVxy53BEv2ZDwHA1Qtf2eQKkxXYHYx";
const Yelp = {
    search(term,location,sortBy){
        return fetch(
            `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
            )
    }
};