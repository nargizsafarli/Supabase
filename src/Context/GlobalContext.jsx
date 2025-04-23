import { createContext, useEffect, useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
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
const register = async ({ name, surname, phone, email, password }) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, surname, phone },
      },
    });

    if (error) {
      return { error: error.message };
    }
   
    return { data };
  } catch (err) {
    return { error: err.message };
  }
};


// GlobalContext.jsx

const login = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: error.message};
    }
    setUser(data.user);
    return { data };
  } catch (err) {
    return { error: "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin." };
  }
};

const logout = async () => {
  await supabase.auth.signOut();
  setUser(null);
};
 
const checkSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  setUser(session?.user || null);
};

useEffect(() => {
  checkSession();
  supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user || null);
  });
}, []);


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
        register,
        login,
        logout,
        user
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
