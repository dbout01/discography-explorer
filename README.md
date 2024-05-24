## Overview

**Project Title**:  Discography Explorer

**Project Description**:
Create a website that allows users to explore Ariana Grande's discography. Users can interact with the tool to view albums, songs, and other related information. The tool will utilize TypeScript and JavaScript to implement various features such as displaying output, handling recursion, using classes to model albums and songs, managing lists of albums and songs, implementing asynchronous functions for fetching data, and handling exceptions.

**Project Goals**:
- Complete discography representation
- Error handling
- Efficient data retrieval

## Instructions for Build and Use

Steps to build and/or run the software:

1. Set Up the Development Environment: Ensure you have Node.js and npm (or yarn) installed on your machine. You can download Node.js from nodejs.org.
2. Clone the Repository: If your project is stored in a version control system like Git, clone the repository to your local machine.
3. Install Dependencies: Navigate to the project directory and install the project dependencies using npm or yarn.
4. Run the Development Server Start the development server to run the application locally. This command typically also watches for file changes and reloads the application automatically.
5. Build the Project: If you need to create a production build of the application, use the build command.
6. Serve the Production Build: If you want to serve the production build locally, you can use a simple HTTP server like 'serve'.
7. Deploy the ApplicationL Depending on your hosting provider, you will need to follow specific instructions to deploy your application. Common hosting providers include Netlify, Vercel, GitHub Pages, and AWS.

Instructions for using the software:
1. Accessing the Application: Open a web browser and navigate to the URL where the application is hosted. If running locally, this is typically http://localhost:3000 or a similar address provided by your development server.

2. Navigating the Homepage
    Albums Display: The homepage features a display of Ariana Grande's albums with their cover images and titles.
    Search Bar: Use the search bar at the top to search for specific albums or tracks.

3. Viewing Album Details
    Album List: Click on any album cover or title to view the detailed tracklist for that album.
    Tracklist: The tracklist will display the titles of all songs in the selected album.

4. Using the Search Functionality
    Search Albums/Tracks: Enter the name of an album or track in the search bar and press "Enter" or click the search icon.
    Search Results: The application will filter and display albums or tracks matching the search criteria.

5. Navigating Through Albums
    Browse Albums: Use the navigation options to browse through different albums if provided. This might include next/previous buttons or a menu with album names.

6. Additional Features
    Responsive Design: The application is designed to be responsive and should work on various devices, including desktops, tablets, and mobile phones.
    Interactive Elements: Hover over albums or use any interactive elements to see additional details or actions available (e.g., play preview, add to favorites, etc.).




## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:
1. Node.js and npm
   - Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
     - Version: 14.x or later
     - Installation: [Node.js official site](https://nodejs.org/)
   - npm: Node Package Manager, comes with Node.js.
     - Version: 6.x or later (comes with Node.js installation)

2. Project Dependencies
   - Install the project dependencies listed in `package.json` by running:
     ```sh
     npm install
     ```

3. Development Tools
   - Visual Studio Code (VS Code): A source-code editor.
     - Installation: [VS Code official site](https://code.visualstudio.com/)
   - ESLint: A static code analysis tool for identifying problematic patterns in JavaScript code.
     - Configuration is included in `.eslintrc.json`.
   - Prettier: A code formatter.
     - Configuration is included in `.prettierrc.js`.
   - TypeScript: A typed superset of JavaScript.
     - Version: 4.x or later
     - Installation: [TypeScript official site](https://www.typescriptlang.org/)
       ```sh
       npm install -g typescript
       ```

4. Web Browser
   - Google Chrome, Mozilla Firefox, or any modern web browser.

5. Version Control System
   - Git: Version control system for tracking changes in source code.
     - Version: 2.x or later
     - Installation: [Git official site](https://git-scm.com/)

6. Development Server
   - Local Development Server:
     - Provided by `npm` scripts.
     - To start the server, run:
       ```sh
       npm start
       ```

Summary of Project Structure:
- album-details: Handles album-specific details.
- api: Contains the data for albums.
- browse-albums: Manages browsing functionality for albums.
- gts-main: Likely related to TypeScript configuration or build process.
- node_modules: Auto-generated directory containing installed npm packages.
- photos: Stores image files used in the project.
- router: Manages application routing.
- search-functionality: Implements search features.
- src: Source code directory.
- view-tracklists: Manages viewing track lists.
- Configuration Files: 
  - `.editorconfig`, `.eslintignore`, `.eslintrc.json`, `.prettierrc.js`, `.eslint.config.mjs`, `tsconfig.json`: Configuration files for code formatting, linting, and TypeScript settings.
- Main Files:
  - `index.html`: Main HTML file.
  - `index.js`, `index.ts`, `main.js`: Main JavaScript/TypeScript files.
  - `package-lock.json`: Locks the versions of packages.
  - `styles.css`: Main CSS file for styling.

These components are essential to recreate the development environment for the Ariana Grande Discography Explorer application. Ensure all dependencies are installed correctly and follow the setup instructions for a smooth development experience.








## Useful Websites to Learn More
I found these websites useful in developing this software:

* [DigitalOcean](https://www.digitalocean.com/community/tutorials/typescript-new-project)
* [W3Schools](https://www.w3schools.com/typescript/)
* [TypeScript Tutorial](https://www.typescripttutorial.net/)
* [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [YouTube](youtube.com)
* [ESLint.org](https://eslint.org/docs/latest/use/getting-started)
* [Fandom](https://arianagrande.fandom.com)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Add the function that throws "song/album does not exist" when a user types something other than album/song into the searchbar
* [ ] Add website links
* [ ] Add populated lyrics
* [ ] Mmake better use of Node.js to improve backend functionality
