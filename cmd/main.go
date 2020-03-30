package main

import "log"

func main() {
	log.Println("Starting")

	var server = Server{"../db/db.json"}
	run(server)

	log.Println("Finished")
}
