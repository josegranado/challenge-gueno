import { Request, Response } from 'express';
import Cuit from '../models/Cuit';

class CuitController
{
	public async getCuit(req: Request, res: Response): Promise<Response>
	{
		const {id} = req.params;
		try
		{
			const exist = await Cuit.findOne({ cuit: id})
								.select({_id:0, cuit:1 });

			if (exist)
			{
				return res.status(200).json({
					data: exist,
					success: true,
					message: 'OK'
				});
			}
			else
			{
				const cuit = new Cuit({ cuit: id })
				await cuit.save()
				const onlyCuit = await Cuit.findOne(cuit._id)
											.select({_id:0, cuit: 1});
				return res.status(200).json(
						{ 
							data: onlyCuit, 
						  	success: true, 
						  	message: 'OK'
						});
			}
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Algo salio mal' })
		}
	}
	public async all(req: Request, res: Response): Promise<Response>
	{
		try
		{
			const cuits = await Cuit.find();
			return res.status(200).json(
				{
					data: cuits, 
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

export const cuitController = new CuitController();