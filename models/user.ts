import mongoose from 'mongoose';
import {UserDocument, UserModel} from '@modelInterfaces';

const UserSchema = new mongoose.Schema({
  name: String,
});

export const User = mongoose.model<UserDocument, UserModel>('User', UserSchema);
