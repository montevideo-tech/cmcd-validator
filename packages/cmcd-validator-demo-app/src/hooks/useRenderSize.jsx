import React from "react";

const getRenderSize = (windowSizeWidth) => {
    if(windowSizeWidth < 768) return "mobile"
    // if(windowSizeWidth >= 768 && windowSizeWidth < 1024) return "tablet" 
    else return "desktop" 
}

const useRenderSize = () => {
  const isSSR = typeof window !== "undefined";
  const [widthSize, setWidthSize] = React.useState(isSSR ? 480 : window.innerWidth);

  function changeWindowSize() {
    setWidthSize(window.innerWidth);
  }

  React.useEffect(() => {
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return {widthSize, device: getRenderSize(widthSize)}
  
}

export default useRenderSize;