import { useState, useEffect } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState(0);

  useEffect(() => {
    const resizeFunc = () => {
      setDimension(window.innerWidth);
    }
    resizeFunc()
    window.addEventListener('resize', resizeFunc);
    return () => {
      window.removeEventListener('resize', resizeFunc);
    }
  }, [])

  return dimension
}