-- SELECT * FROM Country;
/* 
	INSERT INTO Country (Name) VALUES ('Pakistan');
	INSERT INTO Country (Name) VALUES ('Afghanistan');
	INSERT INTO Country (Name) VALUES ('Iran');
	INSERT INTO Country (Name) VALUES ('Iraq');
	INSERT INTO Country (Name) VALUES ('China');
	INSERT INTO Country (Name) VALUES ('Russia'); 
*/

-- SELECT * FROM City;
/*
	INSERT INTO City (Name, CountryID) VALUES ('Lahore', 1);
	INSERT INTO City (Name, CountryID) VALUES ('Karachi', 1);
	INSERT INTO City (Name, CountryID) VALUES ('Islamabad', 1);
	INSERT INTO City (Name, CountryID) VALUES ('Peshawar', 1);
	INSERT INTO City (Name, CountryID) VALUES ('Quetta', 1);
	INSERT INTO City (Name, CountryID) VALUES ('Kabul', 2);
*/

/*
	SELECT Count(Ci.id) NoOfCities
		FROM Country Co INNER JOIN City Ci
			ON Co.id = Ci.CountryID;
*/

/*
	UPDATE City 
		SET Name = 'Peshawar' 
		WHERE id = 4;
*/

-- DELETE FROM City WHERE id = 6;

INSERT INTO City (Name, CountryID) VALUES ('Kabul', 2);






