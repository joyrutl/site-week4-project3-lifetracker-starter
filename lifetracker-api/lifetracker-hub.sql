\echo 'Delete and recreate lifetracker_hub db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE lifetracker_hub;
CREATE DATABASE lifetracker_hub;
\connect lifetracker_hub

\i lifetracker-hub-schema.sql
