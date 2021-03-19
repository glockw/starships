import axios from "axios";
import _ from "lodash";

const API = "https://swapi.dev/api/starships?page={page}";
const PAGES = 4;
const PAGE_PH = "{page}";
const transform = (results) => {
  const grouped_manufacturers = _.groupBy(
    results,
    (starship) => starship.manufacturer
  );
  const manufacturers = Object.keys(grouped_manufacturers);
  return { manufacturers, starships: results };
};
const get_manufacturers = () => {
  const requests = new Array(PAGES)
    .fill(0)
    .map((_, page) => axios.get(API.replace(PAGE_PH, page + 1)));

  return Promise.all(requests)
    .then((axiosResponse) => axiosResponse.map((r) => r.data))
    .then((r) => r.map((r) => r.results))
    .then((s) => _.flatten(s))
    .then(transform);
};

export { get_manufacturers };
