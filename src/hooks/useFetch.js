import { useEffect, useState } from "react";
import { get_manufacturers } from "../utils/service";

export default function useFetch({ id = 0 }) {
  const [loading, setLoading] = useState(false);
  const [manufactures, setManufacturers] = useState([]);
  const [starchips, setStarchips] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const { manufacturers, starchips } = await get_manufacturers();
      setManufacturers(manufacturers);
      setStarchips(starchips);
      setLoading(false);
    };
    fetch();
  }, []);

  return {
    loading,
    manufactures,
    starchips,
  };
}
