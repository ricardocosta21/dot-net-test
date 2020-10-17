
# Tech Test - Comparison Technologies


## Description

- A simple .Net Core API that allows an anonymous user to submit and retrieve a list of messages. I've added a React client to bring the API to life. This will send both GET and POST requests to the API.

- Since we're managing data from a database, I've chosen to implement the Repository Pattern.

## Build and run

1) To build and run the .NET Core project, change to the restAPI directory and execute the following command:

```console
dotnet run
```

2) To build and run the React app, change to the client directory and execute the following command:

```console
npm i && npm start
```

## Compromises

Due to the 1 hour time constraint, a few compromises were made such as:

- Entity Framework Core InMemory database was used, to keep data access trivial;

- Error handling, data validation and data integrity were neglected;

- API versioning was not implemented due to the project simplicity;

- Unit testing around controllers inputs and responses.

## Improvements

- Setup Swagger to keep the API design under the OpenAPI best practices and make it easier for back-end implementation and client-side consumption. This includes:

    - Authentication and authorization to verify user identity and if he has access to perform a specific function;
    - Logging, for teams to know what the API exposes without having to dive into code files;
    - Versioning;

- Unit and integration tests to keep the application working as expected and avoid production nightmares.


## Ricardo Costa @ 2020
