package main

import (
	"log"
	"net/http"
	"strconv"
)

// Server : simple server
type Server struct {
	dbConfPath string
}

// Runs the server
func run(server Server) {

	log.Println("Connecting to db: " + server.dbConfPath)

	// Connect to db
	db, err := connectDB(server.dbConfPath)

	if err != nil {
		log.Println(err)
	} else {

		q := "SELECT * FROM player"

		log.Println("Conf file read")
		log.Println("Querying \"" + q + "\"")

		// Test
		rows, err := db.Query(q)

		if err != nil {
			log.Println(err)
		} else {

			log.Println("Query has been run:")

			var id int
			var username string
			var password string

			for rows.Next() {
				rows.Scan(&id, &username, &password)
				log.Println("Player " + strconv.Itoa(id) + " : " + username + " " + password)
			}
		}
	}

	//log.Println("Listening to port 8080...")

	// Handle all requests
	//http.HandleFunc("/", requestHandler)

	// Listen to port 8080
	//log.Fatal(http.ListenAndServe(":8080", nil))
}

// Handles an http request
func requestHandler(w http.ResponseWriter, r *http.Request) {

}
