-- Crear la base de datos
CREATE DATABASE usertest;

-- usar la base de datos
use usertest;

-- crear la tabla
CREATE TABLE user (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- mostrar todas las bases de datos
show tables;

-- mostar las descripciones de las bases de datos
describe usertest;


