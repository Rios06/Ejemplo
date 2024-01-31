export const queryRestGet = async () => {
  const response = await fetch("http://localhost:3003/countries")
  const countriesData = await response.json()
  return countriesData
}

export const queryRestPost = (p_body) => {
  try {
    fetch("http://localhost:3003/countries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p_body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  } catch (error) {
    console.log("error", error);
  }
};

export const queryRestUpdate = () => {
  const id = "659b19ccbaf1c55039d3b34b"
  try {
    fetch(`http://localhost:3003/countries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name: "Canada"}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  } catch (error) {
    console.log("error", error);
  }
};

export const queryRestDelete = () => {
  const id = "659b19ccbaf1c55039d3b34b"
  try {
    fetch(`http://localhost:3003/countries/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  } catch (error) {
    console.log("error", error);
  }
};
