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
LINES TERMINATED BY '\n';perfumes

SHOW VARIABLES LIKE 'secure_file_priv';

select * FROM PERFUMES;