import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { customerListActions } from "../../store/customers-slice";
import axios from "axios";

const useShowSuggestions = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (query.length !== 0) {
      axios
        .get(`http://localhost:5000/customer/${query}`, {
          cancelToken: source.token,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(customerListActions.addSuggestions(res.data));
            console.log("Started Searching");
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) return;
          else console.log(error);
        });
    } else {
      dispatch(customerListActions.clearSuggestions());
    }

    return () => source.cancel();
  }, [query, dispatch]);

  return null;
};

export default useShowSuggestions;
