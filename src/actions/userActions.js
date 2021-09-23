export const addUser = (user) => {
  user.id = Math.random().toString();

  return (dispatch, state, { getFirestore }) => {
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


export const getAllUsers = () => {
  return(dispatch, state, {getFirestore}) =>{
    getFirestore().collection("users").onSnapshot((snapshot)=>{
      let users = [];
      snapshot.forEach((doc) =>{
        users.push(doc.data())
      })
      
    dispatch({
      type: "SET_ALL_USERS",
      payload: users
    })
    },(error)=>{});

  };
};
