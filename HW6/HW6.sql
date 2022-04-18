CREATE TABLE teams (
teamID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
teamName VARCHAR(25) NOT NULL, 
startYear INT(4) NOT NULL, 
ownerName VARCHAR(25) NOT NULL, 
GMName VARCHAR(25) NOT NULL, 
coachName VARCHAR(25) NOT NULL, 
MVP VARCHAR(25) NOT NULL, 
arenaAddress VARCHAR(255), 
city VARCHAR(25) NOT NULL, 
state VARCHAR(25) NOT NULL, 
zipCode INT(5) NOT NULL, 
phone INT(20) NOT NULL, 
divWins INT(4) NOT NULL, 
divLoses INT(4) NOT NULL, 
confWins INT(4) NOT NULL, 
confLoses INT(4) NOT NULL, 
overallWins INT(4) NOT NULL, 
overallLoses INT(4) NOT NULL
);
