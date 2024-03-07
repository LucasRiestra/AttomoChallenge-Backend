# AttomoChallenge-Backend

## Description
This project is a backend API developed with Express and Prisma. The API manages relationships between games, users, and votes. The database used is MongoDB.

## Project Organization
The project is organized into several main directories:

- `src`: Contains the source code of the project. It is further organized into:
  - `Types`: Contains type definitions.
  - `Config`: Contains configuration files.
  - `Db`: Contains database related files.
  - `Controllers`: Contains controller files.
  - `Interfaces`: Contains interface definitions.
  - `Routes`: Contains route definitions.
- `prisma`: Contains Prisma configuration files.

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

3. Run the application

npm run dev

This will start the server at http://localhost:4000.

## Usage
The API provides several endpoints to manage games, users, and votes. Here are some examples:

- `GET /games`: Returns a list of all games.
- `POST /games`: Creates a new game.
- `PUT /games/:id`: Updates a specific game.
- `DELETE /games/:id`: Deletes a specific game.
- `GET /users`: Returns a list of all users.
- `POST /users`: Creates a new user.
- `POST /votes`: Creates a new vote.
- `DELETE /votes/:id`: Removes a specific vote.

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