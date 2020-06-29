import { Schema, model, Document } from 'mongoose';
import { IScoring } from '../interfaces/Scoring';

const schema = new Schema({
	confidence: Number,
	approved: Boolean,
});



const Scoring = model<IScoring>('Scoring', schema);

export default Scoring;