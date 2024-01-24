import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { catchAsync } from '../../utils/catchAsync';


const createUser = catchAsync(async (req, res) => {
  console.log(req.body);
  const { password, ...data } = req.body;

  const result = await UserServices.createUserIntoDB(
    req.file,
    password,
    data,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully',
    data: result,
  });
});




const getMe = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const result = await UserServices.getMe(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user retrieved succesfully',
    data: result,
  });
});






export const UserControllers = {
  createUser,
  getMe,
};
