// import { useState } from "react";

export function ButtonOpenWindow() {
  const url: string = "index.html";
  const openWindow = () => {
    // const [headerContent, setHeaderContent] = useState("Header Text");
    // setHeaderContent("");
    const windowFeatures = "width=350,height=600"; // You can set the height as well
    window.open(url, "_blank", windowFeatures);
    open(url);
    const headerElement = document.getElementById("header-main");
    if (headerElement) headerElement.innerHTML = "";
  };

  return (
    <button className="button-open" onClick={openWindow}>
      {/* ▣ */}
      {/* ◳ */}
      {/* ◼ */}❐
    </button>
  );
}
