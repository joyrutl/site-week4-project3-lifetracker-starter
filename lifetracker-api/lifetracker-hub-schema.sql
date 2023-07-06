CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  username   TEXT NOT NULL,
  password   TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name  TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutritional_data (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  calories   INTEGER NOT NULL,
  timestamp   TIMESTAMP NOT NULL DEFAULT NOW(),
  category TEXT NOT NULL,
  quantiity  INTEGER NOT NULL,
  url TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercise_data  (
  id         SERIAL PRIMARY KEY,
  exercise_type   TEXT NOT NULL,
  duration   INTEGER NOT NULL,
  intesity INTEGER NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE sleep_data (
  id         SERIAL PRIMARY KEY,
  num_of_hours   INTEGER NOT NULL,
  start_time   TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE SET NULL
);