const apiKey = "ftNcCv-0Yf-M_g8FasiAgrC7b4oVJsSxiLBKvcgTqGvELKgFRLyvTGih1XFak4KbLxy3MsgYr2hRgsuNhJtriD1nOKfhU-cglssVxy53BEv2ZDwHA1Qtf2eQKkxXYHYx";
const Yelp = {
    search(term,location,sortBy){
        console.log('Se inicia search');
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {headers: {
                Authorization: `Bearer ${apiKey}`
            }}
            ).then(response => {return response.json()}).then(jsonResponse => {
                console.log('jsonResponse');
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            })
    }
};

export default Yelp;

/*
const searchYelp (term, location, sortBy) => {
    console.log('searchYelp');
    Yelp.search(term, location, sortBy).then(businesses=>{
      this.setState({businesses: businesses});
    }

    /*
'best_match',
 'rating',
 'review_count'

/* To overpass the CORS restricion we used  CORS Anywhere. The duration of your access for using 
https://cors-anywhere.herokuapp.com/corsdemo may expire 
— to re-enable it, visit the site and click
 “Request temporary access to the demo server” once more. */