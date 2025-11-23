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

## Testing and Error Handling : Under Construction Disregard For Now

I developed a test suite using React Testing Library and Jest, comprised of 8 tests:

### Unit Tests (6 Tests):

* **Header:** Verifies that the Header component renders the main navigation container, the clickable site title link (Lab 5: React Webpage On AWS), and all three main navigation links ("Home", "About", "Projects").
* **Footer:** Confirms the Footer component renders the correct copyright information (Lab 5 - CSCI3172 | Liam Christie ©).
* **Home Page:** Checks that the Home page renders its unique title (Liam Christie | Portfolio), the introductory description text, and the profile image (Liam Catching Baseball).
* **About Page:** Verifies the About page renders all key sections, including the "About Me" heading and paragraph, the "Education" heading and university text, and the "Technical Skills" heading and description.
* **Projects Page:** Confirms the Projects page renders its main title (My Projects) as well as the headings and descriptions for all listed projects (e.g., "DEEBug" and "Personal Portfolio Website").
* **NotFound Page:** Isolates the NotFound component to ensure it renders both the "404 - Page Not Found" heading and the "Go Back Home" link.

### Integration Tests (2 Tests):

* **App Layout:** Verifies that the main App component correctly renders both the Header (checking for the navigation region and title) and the Footer (checking for the copyright text) on a standard page.
* **404 Routing:** Simulates a user visiting a non-existent URL (e.g., /some/bad/route) and confirms that the router correctly renders the NotFound component by checking for its unique 404 heading and link.


**All 8 automated tests were run using npm test and passed successfully.**

## Sources Used

* **Bootstrap 5:** The layout and components for this site were styled using the Bootstrap 5 framework.
  * Documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/
* **LinkedIN** The Logos Used Are Trademarked To LinkedIn
  * Source: https://brand.linkedin.com/linkedin-logo
* **GitHub** The Logos Used Are Trademarked To Github
  * Source: https://github.com/logos
