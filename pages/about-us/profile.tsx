/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

function Profile() {
  const url = "https://extreme-ip-lookup.com/json/";

  const [value, setValue] = useState("initial");
  const delay = (ms: number | undefined) =>
    new Promise((res) => setTimeout(res, ms));
  useEffect(() => {
    fetcher();
  }, []);
  async function fetcher() {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json["message"]);
    await delay(5000);
    setValue(json["message"]);
    return json;
  }
  return <div style={{ color: "green" }}>{value}</div>;
}

export default Profile;
