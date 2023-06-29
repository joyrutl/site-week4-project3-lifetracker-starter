CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  username   TEXT NOT NULL,
  password   TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name  TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1)
);

CREATE TABLE nutritional_data (
  id         SERIAL PRIMARY KEY,
  calories   INTEGER NOT NULL,
  timestamp   TIMESTAMP NOT NULL DEFAULT NOW(),
  category TEXT NOT NULL,
  quantiity  INTEGER NOT NULL,
  url TEXT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE exercise_data  (
  id         SERIAL PRIMARY KEY,
  exercise_type   TEXT NOT NULL,
  duration   TIME,
  intesity INTEGER NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE sleep_data (
  id         SERIAL PRIMARY KEY,
  num_of_hours   INTEGER NOT NULL,
  start_time   TIME,
  end_time TIME,
  date  DATE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);