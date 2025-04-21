import { createContext, useEffect, useState } from "react";
import { supabase } from "../client";

export const GlobalContext=createContext();
export const GlobalProvider=({children})=>{

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 6;
    console.log(products);
    const fetchProducts = async (page) => {
        const from = (page - 1) * limit;
        const to = from + limit - 1;
    
        const { data, error } = await supabase
          .from("Products")
          .select("*")
          .range(from, to);
    
        if (error) {
          console.error("Supabase error:", error.message);
        } else {
          setProducts(data);
        }
      };
      useEffect(() => {
        fetchProducts(page);
      }, [page]);



    return (
        <GlobalContext.Provider value={{products,setPage}}>
            {children}
        </GlobalContext.Provider>
    )
}