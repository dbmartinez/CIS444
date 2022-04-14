CREAT TABLE teams (
teamID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
teamName, 
startYear INT(4) NOT NULL, 
ownerName, 
GMName, 
coachName, 
MVP, 
arenaAddress VARCHAR(255), 
city CHAR(255) NOT NULL, 
state CHAR(255) NOT NULL, 
zipCode, 
phone, 
divWins, 
divLoses INT(4) NOT NULL, 
confWins INT(4) NOT NULL, 
confLoses INT(4) NOT NULL, 
overallWins INT(4) NOT NULL, 
overallLoses INT(4) NOT NULL
);