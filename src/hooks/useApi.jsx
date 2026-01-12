import toast from "react-hot-toast";

export const useApi = () => {
  const handleAPI = ({ url, data, token, method, handleAction, onSuccess }) => {
    const options = {
      method: method,
      headers: {},
    };

    if (data instanceof FormData) {
      options.body = data;
    } else {
      options.headers["Content-type"] = "application/json";
      options.body = JSON.stringify(data);
    }

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    const response = fetch(url, options).then(async (res) => {
      if (!res.ok) {
        console.log(res);
      }
      return res.json();
    });

    toast.promise(response, {
      loading: "Loading...",
      success: (response) => {
        handleAction?.(response);
        onSuccess?.();
        return response.message;
      },
      error: (err) => {
        return "Terjadi kesalahan";
      },
    });
  };

  return {
    handleAPI,
  };
};
