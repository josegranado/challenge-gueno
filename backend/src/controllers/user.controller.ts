import { Request, Response } from 'express';

import User from '../models/User';
import Cuit from '../models/Cuit';
import Scoring from '../models/Scoring';
class UserController
{
	public async getUserData( req: Request, res: Response): Promise<Response>
	{
		const { cuit } = req.params;
		try
		{
			const cuitQuery = await Cuit.findOne({ cuit: cuit })
										.populate('user', '-__v');
			const userQuery = await User.findOne({ _id: cuitQuery?.user._id })
										.select({ 
										_id:0,
										name:1, 
										surname:1, 
										birthday:1, 
										scoring:1						
										})
										.populate('scoring', '-_id -__v');
			//const user = await cuit.populated('user');
			/*const user = await User.findOne( {cuit: cuitQuery?._id} )
									.select({ 
										_id:0,
										name:1, 
										surname:1, 
										birthday:1, 
										scoring:1						
									})
									.populate('scoring', '-_id -__v');*/
			return res.status(200).json({
				data: userQuery,
				success: true,
				message: 'OK'
			})
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Algo salio mal' })
		}
	}
	public async create(req: Request, res: Response): Promise<Response>
	{
		const { cuit } = req.params;
		const { name, surname, birthday, confidence } = req.body;
		const approved:boolean = confidence > 9;
		try
		{
			const cuitQuery = await Cuit.findOne({ cuit: cuit });
			const score = new Scoring(
							{
								confidence: confidence,
								approved: approved,
							});
			await score.save();
			let date = new Date(birthday);
			const dias = 1;
			date.setDate(date.getDate() + 1);
			const user = new User({ 
							name: name, 
							surname: surname, 
							birthday: date, 
							scoring: score._id
						});
			await user.save();
			const cuitUpdated = await Cuit.findByIdAndUpdate(
					cuitQuery?._id,
					{
						user: user._id
					},
					{new: true}
				);

			const userPop = await User.findOne( {_id: user._id} )
										.select({ 
											_id:0,
											name:1, 
											surname:1, 
											birthday:1, 
											scoring:1						
										})
										.populate('scoring', '-_id -__v');
			return res.status(200).json({
				data: userPop,
				success: true,
				message: 'OK'
			});
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Algo salio mal' })
		}
	}
}

export const userController = new UserController();