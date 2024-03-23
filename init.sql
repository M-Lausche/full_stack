CREATE DATABASE people;

\connect people

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20)
);


INSERT INTO users (first_name, last_name, email, phone) VALUES ('bob', 'dylan', 'bob@gmail.com', '720-455-8454');
INSERT INTO users (first_name, last_name, email, phone) VALUES ('john', 'lennon', 'john@gmail.com', '773-555-5578');