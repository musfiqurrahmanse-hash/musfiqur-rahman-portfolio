# No-code project manager

The static admin page is published at:

`https://musfiqurrahmanse-hash.github.io/musfiqur-rahman-portfolio/admin/`

It lets the repository owner add, edit and delete portfolio projects and upload a cover image without editing source code. Updates are committed to GitHub and trigger the existing GitHub Pages deployment workflow.

## One-time setup

1. Open [GitHub fine-grained personal access tokens](https://github.com/settings/personal-access-tokens/new).
2. Give the token a recognizable name and expiration.
3. Under **Resource owner**, select `musfiqurrahmanse-hash`.
4. Under **Repository access**, choose **Only select repositories** and select `musfiqur-rahman-portfolio`.
5. Under **Repository permissions**, set **Contents** to **Read and write**. No other permission is needed for this editor.
6. Generate the token and paste it into the admin page. Do not send it in chat or commit it to the repository.

The admin page does not save the token to local storage or cookies; it is held in page memory while the tab remains open. Clear it or close the tab when finished. Use a short expiration and revoke it from GitHub when no longer needed. The admin page is public, so anyone can view its source; the token must never be embedded in the source.

## Use it

1. Open the admin page and paste your token.
2. Click **Connect & load projects**.
3. Fill in the project title, description, category, repository/demo links, and comma-separated technologies.
4. Optionally select a PNG, JPG, WEBP, or GIF cover image up to 5 MB.
5. Click **Save project**. Use **Edit** or **Delete** beside an existing project as needed.
6. Wait for the GitHub Pages workflow to finish, then refresh the public site.

Project details are stored in `src/content/projects.json`; images are stored under `public/images/projects/`. Existing project entries are preserved during setup.

## Security and limitations

- This is a browser-only editor, not a separate server-side login system. Keep the token private and grant access only to this repository.
- The token is sent directly from your browser to the GitHub API over HTTPS. It is not stored by this project.
- Anyone with a valid token configured for this repository can modify its contents. Revoke the token if it may have been exposed.
- Uploaded image files are added as new files; replacing or deleting a project does not automatically remove old image files.
- The admin interface requires an internet connection and GitHub API access.
