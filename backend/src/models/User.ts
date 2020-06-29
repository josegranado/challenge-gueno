import { Schema, model, Document } from 'mongoose';
import {IUser} from '../interfaces/User';

const schema = new Schema({
	name: String,
	surname: String,
	birthday: Date,
	scoring: {type: Schema.Types.ObjectId, ref: 'Scoring'}

});

const User = model<IUser>('User', schema);

export default User;