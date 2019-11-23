import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repo from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    hireable,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>

        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Profile
          </a>

          <ul>
            {login && (
              <Fragment>
                <li>
                  <strong>Username:</strong> {login}
                </li>
              </Fragment>
            )}
            {company && (
              <Fragment>
                <li>
                  <strong>Company:</strong> {company}
                </li>
              </Fragment>
            )}
            {blog && (
              <Fragment>
                <li>
                  <strong>Website:</strong> {blog}
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-dark">Following: {following}</div>
        <div className="badge badge-success">Public Repos: {public_repos}</div>
        <div className="badge badge-light">Public Gists: {public_gists}</div>
      </div>
      <Repo repos={repos} />
    </Fragment>
  );
};

export default User;
