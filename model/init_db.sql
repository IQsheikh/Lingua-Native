
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
    given_name VARCHAR(200) NOT NULL,
    image_url VARCHAR (400) NOT NULL
);


INSERT INTO paintings (artist, date_created, given_name,image_url) VALUES 
('Pablo Picasso', '1937', 'The Weeping Woman','https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/TATE/TATE/TATE_TATE_T05010_10-001.jpg'),  
('Takashi Murakami', '2016', 'Mr. Dob', 'https://d7hftxdivxxvm.cloudfront.net/?height=713&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Faes0eLUVKs0oksAzap8NNw%2Fnormalized.jpg&width=800' ),          
('Katsushika Hokusai', '1831', 'Great Wave - Kanagawa oki nami ura', 'https://d7hftxdivxxvm.cloudfront.net/?height=545&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FxVepiD8MIOhy1OzK7tyJuw%2Fnormalized.jpg&width=800'),
('Gustav Klimt', '1907 - 1908', 'The Kiss', 'https://m.media-amazon.com/images/I/91aSs9uNGRL._AC_SL1500_.jpg'),
('Damien Hirst', '1991', 'The Physical Impossibility of Death in the Mind of Someone Living', 'https://cdn.mos.cms.futurecdn.net/m4Fubda7zVYakfQQNMbqmf.jpg'), 
('Salvador Dali', '1944', 'One Second Before Awakening From a Dream Provoked by the Flight of a Bee Around a Pomegranate.', 'https://th-thumbnailer.cdn-si-edu.com/fAuWENxGckn5QnvgiKB-YFsXek4=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/3b/8a/3b8aafbf-d9b1-4555-90bd-5b23748d27cf/salvador_dali_somni_causat_pel_vol_duna_abella_al_voltant_duna_magrana_un_segon_abans_de_despertar_c_salvador_dali_fundacio_gala-salvador_dali_vegap_barcelona_2018.jpg');  


