
-- Drops the downtime database if it exists currently --
DROP DATABASE IF EXISTS downtime_report;
-- Creates the "downtime_report" database --
CREATE DATABASE downtime_report;

-- Makes it so all of the following code will affect that database--
USE downtime_report;


CREATE TABLE downtime (
    dt DATE,
	robot VARCHAR(10),
    operator VARCHAR(30),
    sessionNum integer(3),
    sideAPartNum VARCHAR(30),
    sideBPartNum VARCHAR(30),
    sideAndIssue VARCHAR(10),
    downtimeStart time,
    downtimeEnd time,
    totalDownTime time
);

INSERT INTO downtime (dt, robot, operator, sessionNum, sideAPartNum, sideBPartNum, sideAndIssue, 
downtimeStart, downtimeEnd, totalDownTime)
VALUES 
("2021-03-03", "YRWM-1", "James Franco", 1, "K1234-24252", "K3434-20061", "A-2", "00:00:00", "00:00:00", "00:00:00"),
("2021-03-03", "YRWM-1", "James DRANKO", 1, "K1234-24252", "K3434-20061", "A-10", "00:00:00", "00:00:00", "00:00:00"),
("2021-03-03", "YRWM-1", "Jake Williams", 1, "K1234-24252", "K3434-20061", "A-2", "00:00:00", "00:00:00", "00:00:00"),
("2021-03-03", "YRWM-1", "James DRANKO", 1, "K1234-24252", "K3434-20061", "A-10", "00:00:00", "00:00:00", "00:00:00"),
("2021-03-03", "YRWM-1", "Jake Williams", 1, "K1234-24252", "K3434-20061", "A-10", "00:00:00", "00:00:00", "00:00:00"),
("2021-03-03", "YRWM-1", "Christian Bowman", 1, "K1234-24252", "K3434-20061", "A-2", "00:00:00", "00:00:00", "00:00:00"),
("2021-03-03", "YRWM-1", "Christian Bowman", 1, "K1234-24252", "K3434-20061", "A-10", "00:00:00", "00:00:00", "00:00:00"),
;



Select * from downtime where operator="James Franco"
