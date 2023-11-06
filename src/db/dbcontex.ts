
import { DataSource } from "typeorm";
import dotenv from 'dotenv'



export const dbcontext = new DataSource({
	type: 'mariadb',
	logging:false,
	synchronize:false,
	host:'127.0.0.1',
	port:3306,
	username:'root',
	password:'123456',
	database:  'blog',
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
});
