package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Connects to a db thanks to a config file
// Returns a pointer to the DB object
func connectDB(confpath string) (*sql.DB, error) {

	// Read config file
	conf, err := readConf(confpath)
	if err != nil {
		return nil, err
	}

	driver := conf.Driver
	path := "../db/" + conf.Path

	// Connect to the db
	db, err := sql.Open(driver, path)
	if err != nil {
		return nil, err
	}

	return db, nil
}
