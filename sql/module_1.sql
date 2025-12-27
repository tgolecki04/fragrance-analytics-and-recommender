use project;
create table perfumes (
url varchar(255),
perfume varchar(255),
brand varchar(255),
country varchar(255),
gender varchar(255),
rating_value decimal(3,2),
raiting_count int,
year_var int,
top varchar(255),
middle varchar(255),
base varchar(255),
main_accord_1 varchar(255),
main_accord_2 varchar(255),
main_accord_3 varchar(255),
main_accord_4 varchar(255),
main_accord_5 varchar(255)

);
LOAD DATA LOCAL INFILE 'C:/Users/Tomasz04/Desktop/Workspace/IT/ml_project/data/data.csv'
INTO TABLE perfumes
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'  
LINES TERMINATED BY '\n';

SHOW VARIABLES LIKE 'secure_file_priv';

select * FROM PERFUMES;
use project;
describe fragrances;
SELECT Brand
FROM fragrances
WHERE lower(Brand) LIKE 'd%'
LIMIT 10;

CREATE TABLE app_data (
    id_app INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    input_1 VARCHAR(255),
    input_2 VARCHAR(255),
    input_3 VARCHAR(255),
    input_4 VARCHAR(255),
    input_5 VARCHAR(255),
    input_6 VARCHAR(255)
);


CREATE TABLE app_data (
    input_1 VARCHAR(255),
    input_2 VARCHAR(255),
    input_3 VARCHAR(255),
    input_4 VARCHAR(255),
    input_5 VARCHAR(255),
    input_6 VARCHAR(255)
);

