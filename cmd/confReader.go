package main

import (
	"encoding/json"
	"os"
)

// Conf : db configuration file
type Conf struct {
	Driver string
	Path   string
}

// Reads a db config file
func readConf(path string) (*Conf, error) {

	// Open and read file
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	// Parse json and return config
	decoder := json.NewDecoder(file)
	configuration := Conf{}

	err2 := decoder.Decode(&configuration)
	if err2 != nil {
		return nil, err2
	}

	return &configuration, nil
}
