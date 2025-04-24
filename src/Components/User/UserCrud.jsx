import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import userd from "./user.module.css"

function UserCrud() {
  const { users, createUser, deleteUser, updateUser } =
    useContext(GlobalContext);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const [user, setUser] = useState({
    name: "",
    surname: "",
    age: "",
  });

  const handleChange = (e) => {
    setUser((preventDefault) => {
      return {
        ...preventDefault,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updateUser({ ...user, id: editId });
      setEditMode(false);
      setEditId(null);
    } else {
      await createUser(user);
    }

    setUser({ name: "", surname: "", age: "" });
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
  };

  const handleEdit = (user) => {
    setUser({ name: user.name, surname: user.surname, age: user.age });
    setEditMode(true);
    setEditId(user.id);
  };

  return (
    <div className={userd.container}>
      <h2>User List</h2>

      <form onSubmit={handleSubmit} className={userd.form}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          value={user.surname}
          name="surname"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          name="age"
          onChange={handleChange}
        />
        <button className={userd.createBtn} type="submit">{editMode ? "save" : "Create"}</button>
      </form>

      <table  cellPadding="10" cellSpacing="0" className={userd.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Crud</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((userItem) => (
            <tr key={userItem.id}>
              <td>{userItem.name}</td>
              <td>{userItem.surname}</td>
              <td>{userItem.age}</td>
              <td>
                {editId === userItem.id ? (
                  <span className={userd.editingTxt}>Editing...</span>
                ) : (
                  <>
                    <button className={userd.deleteBtn} onClick={() => handleDelete(userItem.id)}>
                      Delete
                    </button>
                    <button className={userd.editBtn} onClick={() => handleEdit(userItem)}>Edit</button>
                  </>
                )}
              </td>
                
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserCrud;
