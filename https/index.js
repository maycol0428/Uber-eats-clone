import { YELP_KEY } from "@env";
export const getRestaurantsFromYelp = async (activeTap, city) => {
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_KEY}`,
    },
  };

  return await fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) => {
      return json.businesses.filter((businesses) =>
        businesses.transactions.includes(activeTap.toLowerCase())
      );
    })
    .catch((err) => console.log(err));
};
