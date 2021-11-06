DROP TABLE tweets;

CREATE TABLE tweets(
id SERIAL PRIMARY key,
tweet TEXT
);

/*
Alter Tables
*/

INSERT INTO tweets (tweet) VALUES ('Hello World');