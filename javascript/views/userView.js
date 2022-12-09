import { elements } from "./base.js";

export const renderUser = ({
  avatar_url,
  html_url,
  public_repos,
  followers,
  following,
  name,
  bio,
}) => {
  const markup = `
    <div class="profile-header">
    <div class="profile-name">
      <h3 class="profile-name "> ${name}</h3>
    </div>
      <img src="${avatar_url}" alt="Avatar">
      <div class="profile-details">
        <h6 class="profile-bio">”${bio}”<h6>
        <a href="${html_url}" target="_blank">Visit Profile</a>
      </div>
        </div>   
    <ul class="profile-list">
      <li>Repositories: ${public_repos}</li>
      <li>Followers: ${followers}</li>
      <li>Following: ${following}</li>
    </ul> 
  `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};
