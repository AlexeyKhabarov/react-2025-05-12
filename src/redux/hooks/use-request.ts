import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../entities/request/slice";
import type { AsyncThunk } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../store";

export const useRequest = <T, P>(thunk: AsyncThunk<T, P, {}>, params?: P) => {
  const dispatch = useDispatch<AppDispatch>();
  const [requestId, setRequestId] = useState<string | null>(null);

  const requestStatus = useSelector((state: RootState) => (requestId ? selectRequestStatus(state, requestId) : null));

  useEffect(() => {
    const result = dispatch(thunk(params as any));
    setRequestId(result.requestId);

    return () => {
      result.abort();
      setRequestId(null);
    };
  }, [dispatch, thunk, params]);

  return requestStatus;
};
