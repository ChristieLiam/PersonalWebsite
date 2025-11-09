# Lab 5

* *Date Created*: 08 11 2025
* *Last Modification Date*: 08 11 2025
* *Lab URL*: <https://main.d1wpx8fuhzumwe.amplifyapp.com>
* *Git URL*: <https://git.cs.dal.ca/lchristie/csci-3172/labs/lab5>

## Authors

* [Liam Christie](lm577319@dal.ca) - (Author) | B00968728 (BannerID)

## Built With

* HTML
* CSS
* JS
* React
* [Bootstrap](https://getbootstrap.com/) - The CSS framework used

## Testing and Error Handling

To properly test this application, I performed both manual and automated unit testing to verify individual components and application flow.

**Manual Cross-Browser Testing:** I tested the deployed AWS Amplify site on Google Chrome, Mozilla Firefox, and Apple Safari. The application layout, routing, and all components rendered as expected with no visual or functional errors.

**Automated Unit Testing (React Testing Library):** I wrote a suite of four unit tests to cover critical components:

1. **Header Component:** A test isolates the Header component to verify that all three main navigation links ("Home", "About", "Projects") are successfully rendered.

2. **Home Component:** A test verifies that the Home page component correctly renders its unique welcome message. * NotFound Component: A test isolates the NotFound component to verify that it renders both the 404 error message and the required "Go Back Home" link.

3. **404 Routing:** An integration test on the main App component verifies the router's error handling. It simulates a visit to a non-existent URL and confirms that the NotFound component is rendered, fulfilling the "DO NOT hard-code" requirement.

All automated tests were run using npm test and passed successfully.

## Sources Used

* **Bootstrap 5:** The layout and components for this site were styled using the Bootstrap 5 framework.
    * Documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/
  
## Artificial Intelligence Tools Used

N/A

## Acknowledgments

N/A