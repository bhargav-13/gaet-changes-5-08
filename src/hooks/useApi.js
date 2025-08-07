import { useState, useEffect } from 'react';
import { apiCall } from '../services/api';

export function useApi(endpoint, params = {}, immediate = true) {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: immediate,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await apiCall(endpoint, 'POST', params);
      setState({ data: response.data, loading: false, error: null });
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error : new Error('An error occurred'),
        loading: false,
      }));
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [endpoint, JSON.stringify(params)]);

  return {
    ...state,
    refetch: fetchData,
  };
}