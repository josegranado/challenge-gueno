import express, { Application } from 'express';

import cors from 'cors';

import { startConnection } from './database';

import indexRoutes from './routes/index.routes';

import { startTest } from './test/database.test';
export class Server
{
	public app: Application;
	constructor()
	{
		this.app = express();
		this.config();
		this.routes();
	}
	private config():void
	{
		this.app.set('port', process.env.PORT || 4000)
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false}))
		this.app.use(express.static('public'))
	}

	private routes():void
	{
		this.app.use('/challenge', indexRoutes);
		this.app.all('*', (req: any, res: any) => {
     		res.status(200).sendFile('index.html', { root: './public'});
		});
	}
	public start():void
	{
		if(process.env.NODE_ENV !== "test" )
		{
			startConnection();
		}
		else
		{
			startTest();
		}
		this.app.listen(this.app.get('port'), () =>
			{
				console.log('Servidor en el puerto:', this.app.get('port'));
			});
	}
}

const server = new Server();
if(process.env.NODE_ENV !== "test" )
{
	server.start();
}


export default server;
