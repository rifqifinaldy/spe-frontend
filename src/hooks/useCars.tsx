import { useCallback, useState } from "react";
import { REQUEST } from "../config/axios";
import { ICARS } from "../types/cars.type";
import { API } from "../config/api-collection";

const useCars = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<ICARS[] | []>([]);
  const [error, setError] = useState(false);

  const getCarList = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const response = await REQUEST.get(API.V0.CAR_LIST);
      setList(response.data);
    } catch (error) {
      setError(true);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getTotal = useCallback(() => {
    let totalPrice = 0;
    let totalQuantity = 0;
    if (list.length > 0) {
      totalPrice = (list as ICARS[]).reduce(
        (acc, item) => acc + item.product.price,
        0
      );
      totalQuantity = (list as ICARS[]).reduce(
        (acc, item) => (acc += item.quantity),
        0
      );
    }
    return { totalPrice, totalQuantity };
  }, [list]);

  return { list, setList, loading, error, getCarList, getTotal };
};

export default useCars;
