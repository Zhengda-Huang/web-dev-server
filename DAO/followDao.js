import {followModel} from "../Models/Model.js";

export const findAllFollows = () => followModel.find();

export const createUserFollowsUser = (followerId, followedId) =>
    followModel.create({ follower: followerId, followed: followedId });
export const deleteUserFollowsUser = (followerId, followedId) =>
    followModel.deleteOne({ follower: followerId, followed: followedId });

export const findFollower = (followerId, followedId) =>
    followModel.find({ follower: followerId, followed: followedId });

export const findUsersFollowedByUser = (userId) =>
    followModel.find({ follower: userId })

export const findUsersFollowingUser = (userId) =>
    followModel.find({ followed: userId })