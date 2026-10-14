# Pornima Wable — AWS Cloud & DevOps Portfolio

Responsive portfolio built with plain HTML, CSS, and JavaScript. No framework, package manager, or build step is required.

## Files
- `index.html` — portfolio sections and content
- `styles.css` — responsive layout, colors, animations, and visual components
- `script.js` — mobile menu, scroll progress, and reveal animations
- `assets/Pornima-Wable-Resume.pdf` — resume PDF used by the Download Resume button

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.

Optional local server:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `pornima-wable-portfolio`.
2. Upload all files and folders from this package into the repository root. `index.html` should be at the root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the workflow to finish. The Pages settings screen will show the published URL.
7. After future changes are pushed to the selected branch, GitHub Pages will redeploy automatically.

## Links and accuracy
- LinkedIn: https://www.linkedin.com/in/pornima-wable-aws-devops/
- GitHub: https://github.com/Pornima98
- Email: wablepornima1998@gmail.com
- Project cards point to the GitHub profile because the resume did not specify direct project repository URLs. Replace each profile URL with its specific repository URL when available.
- The resume lists “AWS Certified Cloud Practitioner” under Certifications without a status. This site mirrors that wording and does not label it completed or in progress.

## Update your resume
Replace `assets/Pornima-Wable-Resume.pdf` with your updated PDF using the same filename, and the download link will continue working.

## Customization
- Edit content in `index.html`.
- Change theme colors in the `:root` section at the top of `styles.css`.
