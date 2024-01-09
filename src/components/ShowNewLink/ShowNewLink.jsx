"use client";
import CopyToClipboard from "react-copy-to-clipboard";

const ShowNewLink = ({ shorterLink, copied, copiedText }) => {
  return (
    <>
      {shorterLink && (
        <section className="mt-10 flex flex-col justify-center items-center gap-2">
          <h2>Your shorter link</h2>
          <div className="tooltip" data-tip={copied ? "Copied" : "Copy"}>
            <CopyToClipboard text={shorterLink}>
              <button className="btn" onClick={() => copiedText()}>
                <div>{shorterLink}</div>
              </button>
            </CopyToClipboard>
          </div>
        </section>
      )}
    </>
  );
};
export default ShowNewLink;
