import { elements } from "./base.js";

export const renderRepositories = (repositories) => {
  let markup = "";

  repositories.forEach(({ html_url, name }) => {
    markup += `
      <a href="${html_url}" class="repo-url" target="_blank">
        ${name}
      </a><br>
    `;
  });

  elements.repos.innerHTML = markup;
};
