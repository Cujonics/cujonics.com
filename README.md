# cujonics.com

Sources for https://cujonics.com

# Using the Project

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `docs` folder.
`docs` is the  custom folder for build, so in package.json there need some modifications to be done:
  "scripts": {
    "build": "BUILD_PATH='./docs' react-scripts build",
    // ...
  },
It correctly bundles React in production mode and optimizes the build for the best performance.
