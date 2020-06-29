import { User } from './User';

export interface RequestUser
{
	data:User;
	success:string;
	message: string;
}