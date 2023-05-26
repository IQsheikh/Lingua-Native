
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE IF EXISTS Paintings;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE paintings (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    artist VARCHAR(50) NOT NULL,
    date_created VARCHAR(50) NOT NULL,
    given_name VARCHAR(200) NOT NULL
);


INSERT INTO paintings (artist, date_created, given_name) VALUES 
('Pablo Picasso', '1937', 'The Weeping Woman'),             
('Katsushika Hokusai', '1831', 'Great Wave - Kanagawa oki nami ura'),
('Gustav Klimt', '1907 - 1908', 'The Kiss'),
('Damien Hirst', '1991', 'The Physical Impossibility of Death in the Mind of Someone Living'), 
('Salvador Dali', '1944', 'One Second Before Awakening From a Dream Provoked by the Flight of a Bee Around a Pomegranate.');  


