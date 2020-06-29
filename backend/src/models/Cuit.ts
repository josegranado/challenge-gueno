import { Schema, model, Document } from 'mongoose';
import { ICuit } from '../interfaces/Cuit';

const schema = new Schema({
	cuit:String,
	user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Cuit = model<ICuit>('Cuit', schema);

export default Cuit;