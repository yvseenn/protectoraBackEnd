import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const BASEURL = 'http://localhost:8000';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const INITIAL_STATE = {
    posts: [],
    user: null,
    individualPost: null,
  };

  function reducer(state, action) {
    // make a copy
    const copy = { ...state };
    // decide next action
    switch (action.type) {
      case "GET_POSTS":
        copy.posts = action.payload;
        break;

      case "GET_SINGLE_POST":
        copy.individualPost = action.payload;
        break;

      case "ADD_POST":
        copy.posts.push(action.payload);
        break;

      case "DELETE_POST":
        const index = copy.posts.findIndex((x) => x.id === Number(action.payload));
        copy.posts.splice(index, 1);
        break;

      case "DO_LOGIN":
        copy.user = action.payload;
        break;

      case "DO_LOGOUT":
        copy.user = null;
        break;

      case "CHANGE_NAME":
        copy.user.name = action.payload;
        break;

      default:
        break;
    }

    return copy;
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get(BASEURL + "/posts");
      dispatch({ type: "GET_POSTS", payload: res.data });
    }
    getPosts();
  }, []);

  useEffect(() => {
    try {
      const userSaved = JSON.parse(localStorage.getItem("_user"));
      dispatch({ type: "DO_LOGIN", payload: userSaved });
    } catch (error) {
      console.error(error);
    }
  }, []);

  async function addPost(newPost) {
    await axios.post(BASEURL + "/posts", newPost);
    dispatch({ type: "ADD_POST", payload: newPost });
  }

  async function login(mail, pwd) {
    const res = await axios.post(BASEURL + "/users/login", { email: mail, password: pwd });
    dispatch({ type: "DO_LOGIN", payload: res.data.user });
    localStorage.setItem("_user", JSON.stringify(res.data.user));
  }

  async function register(mail, pwd, name) {
    await axios.post(BASEURL + "/users/register", { email: mail, password: pwd, name: name });
  }

  async function changeName(newName) {
    await axios.patch(BASEURL + `/users/${state.user.id}`, { name: newName });
    dispatch({ type: "CHANGE_NAME", payload: newName });
  }

  function closeSession() {
    dispatch({ type: "DO_LOGOUT" });
    localStorage.removeItem("_user");
  }

  async function getIndividualPost(id) {
    const res = await axios.get(BASEURL + `/posts/${id}`);
    dispatch({ type: "GET_SINGLE_POST", payload: res.data });
  }

  async function deletePost(id) {
    const res = await axios.delete(BASEURL + `/posts/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
  }

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        user: state.user,
        individualPost: state.individualPost,
        addPost,
        login,
        register,
        changeName,
        closeSession,
        getIndividualPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
