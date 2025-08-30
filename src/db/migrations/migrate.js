import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });


const pushmigration = async () => {
      const clientmigration = postgres(process.env.DB_CONNECTION_STRING, {
        max: 1 ,
      }) ;

      const dbmigration = drizzle(clientmigration) ;
      await migrate(dbmigration , {
        migrationsFolder: "./src/db/migrations/drizzle" ,
      })
      clientmigration.end() ;

}

pushmigration() ;