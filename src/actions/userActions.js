import {getFirestore} from "redux-firestore";

export const addUser = (user) => {
  user.id = Math.random().toString();

  return (distatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add(user)
      .then((docs) => {
        console.log(docs);
      });
  };

  /*return {
        type: "ADD_USER",
        payload: user
    }*/
};

export const editUser = (updatedUser) => {
  return {
    type: "EDIT_USER",
    payload: updatedUser,
  };
};

export const deleteUser = (user_id) => {
  return {
    type: "DELETE_USER",
    payload: user_id,
  };
};
