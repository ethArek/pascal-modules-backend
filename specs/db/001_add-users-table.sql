CREATE TABLE IF NOT EXISTS users (
   id uuid NOT NULL PRIMARY KEY,
   username varchar(64) NOT NULL, 
   password varchar(256) NOT NULL
);