const useMailprex = (url, webName, emailDestiny, formToken) => {
  const formData = {
    fullname: "",
    email: "",
    message: "",
    phone: "",
    service: "",
  };

  const response = {
    data: null,
    loading: false,
    error: null,
  };

  function handleChange(e) {
    formData[e.target.name] = e.target.value;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      response.loading = true;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, webName, emailDestiny, formToken }),
      };
      const res = await fetch(url, options);
      const data = await res.json();
      response.data = data;
      response.loading = false;
    } catch (error) {
      response.error = error;
      response.loading = false;
    }
  }

  return { formData, handleChange, handleSubmit, response };
};

export default useMailprex;
