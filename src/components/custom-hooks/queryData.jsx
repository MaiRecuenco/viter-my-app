import { devApiUrl, devKey } from "../helpers/function-general";

export const queryData = (
  endpoint, //url of php
  method = "get", // if null automatic set as get
  fd = {} //payload
) => {
  let url = `${devApiUrl}${endpoint}`;
  let username = devKey;
  let password = "";
  let auth = btoa(`${username}:${password}`);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic " + auth);
  myHeaders.append("Content-Type", "application/json");

  let options = {
    method,
    headers: myHeaders,
  };

  if (method !== "get") {
    options = {
      ...options,
      body: JSON.stringify(fd),
    };
  }

  const data = fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      if (
        result?.count == 0 &&
        !result?.success &&
        !Object.keys(result).includes("error")
      ) {
        throw new Error("Something went wrong, API network.");
      }
      return result;
    });
  return data;
};
