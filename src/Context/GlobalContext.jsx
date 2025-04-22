import { createContext, useEffect, useState } from "react";
import { supabase } from "../client";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  console.log(users, "users");
  const [page, setPage] = useState(1);
  const limit = 6;

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


//   ! ------------------------User--------------------------------------

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Supabase error:", error.message);
    } else {
      setUsers(data);
    }
  };
  const createUser = async (newUser) => {
    const { data, error } = await supabase.from("users").insert([newUser]);

    if (error) {
      console.error("Create user error:", error.message);
    } else {
      fetchUsers();
    }
  };

  const deleteUser = async (id) => {
    const { error } = await supabase.from("users").delete().eq("id", id);

    if (error) {
      console.log("delete Error", error.message);
    } else {
      fetchUsers();
    }
  };

  const updateUser = async (updateUser) => {
    const { id, name, surname, age } = updateUser;
    const { error } = await supabase
      .from("users")
      .update({ name, surname, age })
      .eq("id", id);
    if (error) {
      console.log("Update Error", error.message);
    } else {
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

//   ! ---------------------------------Auth-----------------------------------





  return (
    <GlobalContext.Provider
      value={{
        products,
        setPage,
        users,
        fetchUsers,
        createUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
