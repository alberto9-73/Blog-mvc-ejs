
import { DataSource } from "typeorm";

export const dbcontext = new DataSource({
	type: 'mariadb',
	host: process.env.DB_HOST,
	logging:false,
	synchronize:false,
	port:  Number(process.env.DB_PORT)|| 3306,
	username:'root',
	password:'123456',
	database:process.env.DB_NAME,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
});
