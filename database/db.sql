--use limosbardb

--Table Drinks
CREATE TABLE drinks (
    d_id int primary key auto_increment,
    dr_name varchar(200) not null,
    d_desc varchar(300),
    d_price varchar(15) default 1,
    isSelected boolean default 0,
    hasAlcohol boolean default 1
);
