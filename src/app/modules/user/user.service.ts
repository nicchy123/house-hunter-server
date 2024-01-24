import { User } from './user.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { TUser } from './user.interface';

const createUserIntoDB = async (
  file: any,
  password: string,
  payload: TUser,
) => {
  console.log(file, password, payload);
  // const randomId = Math.random();
  // const imageName = `${randomId}${payload?.name}`;
  // const path = file?.path;
  // const { secure_url } = (await sendImageToCloudinary(imageName, path)) as any;
  // payload.profileImg = secure_url;
  payload.password = password;
  const newUser = await User.create(payload);
  return newUser;
};

const getMe = async (userId: string) => {
  const result = await User.findOne({ id: userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getMe,
};
