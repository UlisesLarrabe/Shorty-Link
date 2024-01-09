"use client";
import { useState } from "react";
import ShowNewLink from "../ShowNewLink/ShowNewLink";
import ErrorStatus from "../ErrorStatus/ErrorStatus";

const InputUrl = () => {
  const API_URL = process.env.NEXT_PUBLIC_API;
  const [url, setUrl] = useState("");
  const [shorterLink, setShorterLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState({
    status: false,
    text: "Ha ocurrido un error",
  });

  const getShorterLink = async (url) => {
    try {
      const res = await fetch(`${API_URL}${url}`);
      if (!res.ok) {
        setError({ status: true, text: "Ha ocurrido un error" });
        return;
      }
      const json = await res.json();
      setShorterLink(json.data);
      setUrl("");
      setError({ status: false });
    } catch (e) {
      setError({ status: true, text: { e } });
    }
  };

  const copiedText = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <section className="flex md:flex-row gap-2 md:w-[50%] items-center justify-center flex-col w-[300px]">
        <input
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="https://example.com"
          className="input input-bordered w-full max-w-xs"
          value={url}
        />
        <button className="btn btn-active" onClick={() => getShorterLink(url)}>
          Convert
        </button>
      </section>
      <ShowNewLink
        shorterLink={shorterLink}
        copied={copied}
        copiedText={copiedText}
      />
      <ErrorStatus error={error} />
    </>
  );
};
export default InputUrl;
