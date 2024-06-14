import { useState,useEffect } from "react";
function useWindowsSize(){
  const [windowSize , setWindowSize] = useState({
    width : window.innerWidth ,
    heigth : window.innerHeight 
  });
  function calcSize(){
      setWindowSize({
        width : window.innerWidth ,
        heigth : window.innerHeight 
      });
  }
  useEffect( () =>(
      window.addEventListener('resize',calcSize)
  ),[]);
  return windowSize;
}
export default useWindowsSize;