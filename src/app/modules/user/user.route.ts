import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { auth } from '../../middlewares/auth';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/create-user',
  // upload.single('file'),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next();
  // },
  UserControllers.createUser,
);


router.get('/me', auth("student","faculty","admin"), UserControllers.getMe);

export const UserRoutes = router;
