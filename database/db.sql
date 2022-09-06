--use limosbardb

--Table Drinks
CREATE TABLE drinks (
    d_id int primary key auto_increment,
    dr_name varchar(200) not null,
    d_desc varchar(500) not null,
    d_price varchar(15) not null default 1,
    isSelected boolean not null default 0,
    hasAlcohol boolean not null default 1
);

