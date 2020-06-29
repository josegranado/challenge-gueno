import { Scoring } from './Scoring';

export interface User
{
	name: string;
	surname: string;
	birthday: Date;
	scoring: Scoring;
}