import { Document } from 'mongoose';
import { IUser } from './User';
export interface ICuit extends Document
{
	cuit:string;
	user: IUser
}