import User from '../models/User.js';
import { hashingData, verifyHashingData } from '../utils/bcryptUtils.js';
import CustomError from '../utils/CustomError.js';

//Fetch logged-in user details
export const fetchUserData = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const user = await User.findOne({ where: { userId } });
    if (!user) {
      throw new CustomError('User is not found', 404);
    }

    return res.status(200).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    next(error);
  }
};

//Change password functionality
export const changePassword = async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id;

  if (!currentPassword || !newPassword) {
    return next(
      new CustomError('Current password and new password are required', 400)
    );
  }

  try {
    const user = await User.findOne({ where: { userId } });

    if (!user) {
      throw new CustomError('User is not found', 404);
    }

    //Check if the current password is match or not
    const isMatch = await verifyHashingData(currentPassword, user.password);
    if (!isMatch) {
      throw new CustomError('Current password is invalid', 403);
    }

    //Hashing new password
    const hashedPassword = await hashingData(newPassword);
    await user.update({ password: hashedPassword });

    return res.status(200).json({
      status: 'success',
      message: 'Password change successfully'
    });
  } catch (error) {
    next(error);
  }
};
