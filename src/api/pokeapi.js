const API_ROOT = "https://pokeapi.co/api/v2/";

export const fetchAPI = async ({ id, endpoint, params }, thunkAPI) => {
  const paramsString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  const resource = `${API_ROOT}${endpoint}/${
    id ? `${id}/` : ""
  }${paramsString}`;
  const init = { mode: "cors" };
  const response = await fetch(`${resource}`, init);
  const json = await response.json();
  return json;
};
