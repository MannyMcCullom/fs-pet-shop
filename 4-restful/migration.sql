DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
    id serial,
    name text,
    age INT,
    kind text

);

INSERT INTO pets(name, age, kind)
VALUES('Jeff', 1, 'dog');