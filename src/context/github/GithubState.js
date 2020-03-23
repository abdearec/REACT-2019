import React, { useReducer } from "react";
import axios from "axios";
import GithubReducer from "./githubReduser";
import GithubContext from "./githubContext";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from "../types";

const GithubState = props => {
  const initialState = {
    loading: false,
    users: [],
    repos: [],
    user: {}
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search Users
  const onSearchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };
  // Clear Users
  const onClearUsers = () => {
    dispatch({
      type: CLEAR_USERS
    });
  };

  //Get User
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };
  // Get User Repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        repos: state.repos,
        user: state.user,
        onSearchUsers,
        onClearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
