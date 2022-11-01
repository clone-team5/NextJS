import { AppDataSource } from "./data-source"
import { User } from "./entities/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
