CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(24) UNIQUE NOT NULL,
    email VARCHAR(320) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY NOT NULL,
    first_user INT NOT NULL REFERENCES users(id),
    second_user INT NOT NULL REFERENCES users(id)
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY NOT NULL,
    content TEXT NOT NULL,
    author INT NOT NULL REFERENCES users(id),
    contact INT NOT NULL REFERENCES contacts(id),
    date DATE NOT NULL
);