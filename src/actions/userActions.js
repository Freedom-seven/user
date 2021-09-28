export const addUser = (user) => {
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
  return(dispatch, state, {getFirestore})=> {
    getFirestore().collection("users").doc(updatedUser.id).set(updatedUser).then(()=>{});
  }
  // return {
  //   type: "EDIT_USER",
  //   payload: updatedUser,
  // };
};

export const deleteUser = (user_id) => {
  return(dispatch, state, {getFirestore}) => {
    getFirestore().collection("users").doc(user_id).delete().then(()=>{});
  }
  // return {
  //   type: "DELETE_USER",
  //   payload: user_id,
  // };
};


export const getAllUsers = () => {
  return(dispatch, state, {getFirestore}) =>{
    getFirestore().collection("users").orderBy("name",).onSnapshot((snapshot)=>{
      let users = [];
      snapshot.forEach((doc) =>{
        users.push({...doc.data(), id:doc.id})
      })
      
    dispatch({
      type: "SET_ALL_USERS",
      payload: users
    })
    },(error)=>{});

  };
};
