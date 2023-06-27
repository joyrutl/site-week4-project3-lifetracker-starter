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
  timestamp   TIMESTAMP,
  category TEXT NOT NULL,
  quantiity  INTEGER NOT NULL
);

CREATE TABLE exercise_data  (
  id         SERIAL PRIMARY KEY,
  exercise_type   TEXT NOT NULL,
  duration   TIME,
  intesity INTEGER NOT NULL
);

CREATE TABLE sleep_data (
  id         SERIAL PRIMARY KEY,
  num_of_hours   INTEGER NOT NULL,
  start_time   TIME,
  end_time TIME,
  date  DATE
);