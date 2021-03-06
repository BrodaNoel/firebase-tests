# Firebase App Example
This repo is created to improve knowledge about Firebase and do some tests. Enjoy it!

## Features

### Frontend
#### Init Firebase
Just a basic Firebase initialization, necessary before start doing anything. Do not forget to check the `package.json` file to see all necessary dependencies.
> Search in this project for: `// Feature: Init Firebase`

#### Keep Firebase Token updated in LocalStorage.
Every time that the Firebase Token change (because the token expired or the user login or logout), this token will be written in localStorage, as `firebaseToken` key.
> Search in this project for: `// Feature: Keep Firebase Token Updated`

#### Keep on sync a var that is defined in the Firebase Realtime Database.
I defined a var in the realtime database, and this var will be shown and changed automatically every time the var change its value in the database.
> Search in this project for: `// Feature: Keep var on sync`

#### Login with Twitter
This site allows you to login using Twitter, with the Firebase Authentication service.
> Search in this project for: `// Feature: Login with Twitter`

### Backend (functions)
#### Endpoint with Authentication
This endpoint is created to just say Hello! using GET method and only for authenticated users.
The endpoint is exposed in: `https://us-central1-fir-tests-f81de.cloudfunctions.net/api/sayHelo`
> Search in this project for: `// Feature: Hello endpoint with authentication`

#### Fix CORS issues
An configuration to avoid CORS issues for every origin.
> Search in this project for: `// Feature: CORS`
