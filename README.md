# AttomoChallenge-Backend

## Description
This project is a backend API developed with Express and Prisma. The API manages relationships between games, users, and votes. The database used is MongoDB.

The project serves as the backend for the voting web application designed for Vegetta777's community to choose the most anticipated video game of 2023. Users can register, log in, and vote for their favorite games. The backend is responsible for managing the database, user authentication, and game-related functionalities.

## Project Organization
The project is thoughtfully structured, ensuring clear organization and separation of concerns. The main directories within the src folder are described as follows:

- `src`: Contains the source code of the project. It is further organized into:
  - `Types`: This directory houses TypeScript type definitions, ensuring strong typing throughout the project for improved code robustness.
  - `Config`:  Contains configuration files that handle various project settings, providing a centralized location for configuration management.
  - `DB`: This directory encapsulates database-related files, emphasizing a modular approach to handling database interactions.
  - `Controllers`: The controllers directory holds files responsible for handling different routes and functionalities, promoting a clean and modular codebase.
  - `Interfaces`: Within this directory, interface definitions are stored, enhancing code readability and ensuring consistent data structures.
  - `Routes`: Manages Express routes for various API endpoints, facilitating a well-organized structure for handling different aspects of the application's functionality.
- `prisma`: The prisma directory houses configuration files related to Prisma, where database models and schema are defined.

This organization fosters code modularity, reusability, and maintainability, providing a solid foundation for the backend of the Attomo Challenge project.

## Requirements
- Node.js
- MongoDB
- Express

## Installation
1. Clone the repository:

git clone https://github.com/LucasRiestra/AttomoChallenge-Backend.git

2. Install the dependencies:

cd AttomoChallenge-Backend
npm install

3. Set Up Environment Variables. Create a .env file with the following variables:

DATABASE_URL=mongoDB_connection_string

4. Run the application

npm run dev

This will start the server at http://localhost:4000.

DATABASE_URL=mongoDB_connection

## API Enpoints
The API provides several endpoints to manage games, users, and votes. Here are some examples:

User Authentication

POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in with username and password.

Game Management (Admin Only)

POST /api/games: Create a new game.
PUT /api/games/:id: Edit an existing game.
DELETE /api/games/:id: Delete a game.

Voting

GET /api/games: Get a list of games sorted by vote count or alphabetically.
GET /api/games/:id: Get details of a specific game.
POST /api/votes/:id: Vote for a game (restricted to registered users, max 5 votes per user).
GET /api/users/:id/votes: Get the list of games a user has voted for.

## Database Schema

The database schema is defined using Prisma within the prisma directory. It includes the following collections:

users: Stores user information, including username, password, and role.
games: Stores details about the video games, such as name, category, image (stored securely on Cloudinary), and vote count.
votes: Manages the relationship between users and the games they voted for.

## Cloudinary Configuration
The config directory contains configuration files, including Cloudinary configuration. Cloudinary is utilized to securely store and manage images uploaded within the application. The configuration ensures that the images are securely stored in Cloudinary, and the application generates secure URLs for accessing these images.

## Contributions
Contributions are welcome. If you find any issues or have any suggestions, feel free to open an issue or submit a pull request.

## Contact
For any questions or comments, please contact me at:

Lucas.riestra94@gmail.com
https://www.linkedin.com/in/lucasriestra/

## License
MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.