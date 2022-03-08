const API_ROOT = "https://pokeapi.co/api/v2/";

export const fetchPokemon = async ({ id, params }, thunkAPI) => {
  const paramsString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  const resource = `${API_ROOT}pokemon/${id ? id + "/" : ""}${paramsString}`;
  const init = { mode: "cors" };
  const response = await fetch(`${resource}`, init);
  const json = await response.json();
  return json;
};

export const fetchAbility = async ({ id, params }, thunkAPI) => {
  const paramsString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  const resource = `${API_ROOT}ability/${id ? id + "/" : ""}${paramsString}`;
  const init = { mode: "cors" };
  const response = await fetch(`${resource}`, init);
  const json = await response.json();
  return json;
};

export const fetchStat = async ({ id, params }, thunkAPI) => {
  const paramsString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  const resource = `${API_ROOT}stat/${id ? id + "/" : ""}${paramsString}`;
  const init = { mode: "cors" };
  const response = await fetch(`${resource}`, init);
  const json = await response.json();
  return json;
};

export const fetchType = async ({ id, params }, thunkAPI) => {
  const paramsString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  const resource = `${API_ROOT}type/${id ? id + "/" : ""}${paramsString}`;
  const init = { mode: "cors" };
  const response = await fetch(`${resource}`, init);
  const json = await response.json();
  return json;
};
