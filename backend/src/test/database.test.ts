import mongoose from 'mongoose';
import keys from './keys';

export async function startTest(){
	await mongoose.connect(`mongodb://${keys.host}:${keys.port}/${keys.database}`,
							{
								useNewUrlParser: true,
								useUnifiedTopology: true,
								useFindAndModify: false
							});
	console.log('Base de datos de prueba conectada')
}