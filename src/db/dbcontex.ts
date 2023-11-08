
import { DataSource } from "typeorm";

export const dbcontext = new DataSource({
	type: 'mariadb',
	host: process.env.DB_HOST,
	logging: false,
	synchronize: true,
	port: Number(process.env.DB_PORT) || 3306,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
});
