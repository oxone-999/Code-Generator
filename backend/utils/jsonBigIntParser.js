import JsonBig from "json-bigint";
export const jsonBigIntParser = (json) => {
  return JsonBig.parse(JsonBig.stringify(json));
};
