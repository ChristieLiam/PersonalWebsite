# Personal Website

* *Date Created*: 08 11 2025
* *Last Modification Date*: 23 11 2025
* *Site URL*: <https://main.dtgafn2dlji78.amplifyapp.com/>
* *API URL* <https://exquisite-meerkat-2c2369.netlify.app/.netlify/functions/api>

## About

I built this site to showcase my portfolio of web development projects. It serves as a central hub for my work, demonstrating my skills in building modern, responsive applications with HTML, CSS, and JavaScript. Every project here is built with a focus on web standards, W3C compliance, and a clean, user-friendly experience.

## Authors

* [Liam Christie](lm577319@dal.ca) - (Author)

## Built With

* HTML
* CSS
* JS
* React
* [Bootstrap](https://getbootstrap.com/) - The CSS framework used
* AWS Amplify (Frontend)
* Netlify (Backend)
* **Deployed Though Git:** https://github.com/ChristieLiam/PersonalWebsite

## Testing and Error Handling

I developed a comprehensive test suite using **React Testing Library** and **Jest**, comprised of **9 tests**.

To ensure robust testing without relying on external dependencies, I implemented a **Custom Render** function (`renderWithProviders`) that wraps every component in the necessary `Router` and `PageThemeProvider` contexts. Additionally, all API calls (Weather, Projects, and Skills) are **mocked globally** to simulate data fetching and ensure the UI handles asynchronous data correctly.

### Component & Layout Tests (2 Tests)
* **Header:** Verifies that the navigation bar renders correctly, including the main brand link ("Liam Christie | Portfolio") and the navigation container.
* **Footer:** Confirms the presence of the dynamic copyright text and ensures the **Dark/Light Mode toggle button** is rendered and interactive.

### Dynamic Page Tests (3 Tests)
* **Home Page:** Checks for the static welcome message ("Web-Centric Computing") and validates that the **Weather API** mock successfully loads and displays the weather widget ("Current Weather in Halifax").
* **Projects Page:** Verifies the page structure and waits for the **Projects API** mock to resolve, confirming that project cards (e.g., "Test Project") are mapped and rendered correctly.
* **Skills Page:** Tests the "My Skills" heading and search bar, while also verifying that the **Skills API** mock loads specific data (e.g., "Frontend Development", "React") into the view.

### Static Page Tests (4 Tests)
* **About Page:** Verifies the correct rendering of the "About Me" section and educational background details ("Dalhousie University").
* **Contact Me:** Checks for the presence of the "Let's Connect!" heading and ensures contact details (email address) are visible.
* **Lab Info:** Confirms that the Lab-Info page renders the correct version control text ("PersonalPortfolio V2").
* **NotFound Page:** Isolates the 404 error component to ensure it displays the correct "404 - Page Not Found" error message to the user.

All 9 automated tests were run using `npm test` and passed successfully.

## Sources Used

* **Bootstrap 5:** The layout and components for this site were styled using the Bootstrap 5 framework.
  * Documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/
* **LinkedIN** The Logos Used Are Trademarked To LinkedIn
  * Source: https://brand.linkedin.com/linkedin-logo
* **GitHub** The Logos Used Are Trademarked To Github
  * Source: https://github.com/logos
