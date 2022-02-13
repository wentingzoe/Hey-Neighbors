-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS categories CASCADE;


CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(1000)
);


CREATE TABLE categories(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  host_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  event_name VARCHAR(255) NOT NULL,

  address VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  post_code VARCHAR(255) NOT NULL,

  date DATE NOT NULL,
  start_at TIME NOT NULL,
  duration NUMERIC NOT NULL,

  photo_image VARCHAR(255) NOT NULL,
  description TEXT,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  max_people_number INTEGER NOT NULL,
  mask BOOLEAN NOT NULL DEFAULT FALSE,
  vaccine BOOLEAN NOT NULL DEFAULT FALSE,
  status BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE applications (
  id SERIAL PRIMARY KEY NOT NULL,
  participate_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  description TEXT,
  people_number INTEGER NOT NULL,
  vaccine BOOLEAN NOT NULL DEFAULT FALSE,
  status BOOLEAN NOt NULL DEFAULT FALSE
);


