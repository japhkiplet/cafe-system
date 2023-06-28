create database CAFE;

--tables
create table Users(
    user_id int PRIMARY KEY IDENTITY(1,1),
    username varchar(50),
    email varchar(100),
    password_hash varchar(100),
    registration_date DATETIME,
    last_login_date DATETIME
)


create table reserve(
    tableId int IDENTITY(1,1),
    tableNumber varchar(20) PRIMARY KEY
)

create table Reservation(
    reservation_id int IDENTITY(100,1),
    username varchar(50),
    email varchar(50),
    reservation_date date,
    tableNumber varchar(20),
    reservation_time VARCHAR(10),
    No_of_people int,
    tel VARCHAR(20),
    FOREIGN key (tableNumber) REFERENCES reserve(tableNumber)
)

create table comments(
    id int PRIMARY KEY IDENTITY(1,1),
    description varchar(255)
)

