import { Document } from 'mongoose';
export interface IScoring extends Document
{
	confidence:number;
	approved: boolean;
}