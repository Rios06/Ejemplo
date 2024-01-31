export const queryGraph = async (variables) => {
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
              query Country($code: ID!) {
                country(code: $code) {
                  code
                  name
                  capital
                  continent {
                    code
                    name
                  }
                  currency
                  native
                  phone
                  languages {
                    name
                  }
                }
              }`,
      variables: variables,
    }),
  });
  const countrieData = await response.json();
  return countrieData;
};