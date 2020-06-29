import { Document } from 'mongoose';
import { ICuit } from './Cuit';
import { IScoring } from './Scoring';
export interface IUser extends Document
{
	name: string;
	surname: string;
	birthday: Date;
	cuit:ICuit;
	scoring:IScoring;
}