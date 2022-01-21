// useSelector  --> value reducer
//
import { useContext } from "react";
import { langContext2 } from "./context/langContext";

import  {useState , useEffect } from "react";
// import {setLang}from "../store/actions/lang"

function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(langContext2)

  

 const [lang, setlang] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("lang");
    const initialValue = JSON.parse(saved);
    if(initialValue != null){
      setContextLang(initialValue)
    }else {
      setContextLang("en")
    }
    //  return initialValue || "";
  });
useEffect(() => {
    // storing input name
    localStorage.setItem("lang", JSON.stringify(contextLang));
  }, [contextLang]);

  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
      >
        {contextLang}
      </button>
    </div>

  );
}

export default ChangeLanguage;