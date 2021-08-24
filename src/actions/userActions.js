export const addUser = (user) => {
    user.id = Math.random().toString();
    return {
        type: "ADD_USER",
        payload: user
    }
}

export const editUser = (updatedUser) => {
    return {
        type: "EDIT_USER",
        payload: updatedUser
    }
}

export const deleteUser = (user_id) => {
    return {
        type: "DELETE_USER",
        payload: user_id
    }
}