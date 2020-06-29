import { Router } from 'express';
import { cuitController } from '../controllers/cuit.controller';
import { userController } from '../controllers/user.controller';
class IndexRoutes 
{
	public router: Router = Router();

	constructor()
	{
		this.config();
	}
	private config():void
	{
		this.router.get('/getCuit/:id', cuitController.getCuit);
		this.router.get('/getCuits', cuitController.all);
		//this.router.post('/setUserData')
		this.router.get('/getUserData/:cuit', userController.getUserData);
		this.router.post('/setUserData/:cuit', userController.create);

	}
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;