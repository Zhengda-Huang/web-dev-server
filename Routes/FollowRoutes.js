import * as dao from "../DAO/followDao.js";
import {findFollower} from "../DAO/followDao.js";

function FollowsRoutes(app) {
    const findAllFollows = async (req, res) => {
        console.log("findAllFollows");
        const follows = await dao.findAllFollows();
        console.log(follows)
        res.send(follows);
    };
    const createUserFollowsUser = async (req, res) => {
        const { followerId, followedId } = req.params;
        const follow = await dao.createUserFollowsUser(followerId, followedId);
        res.send(follow);
    };
    const deleteUserFollowsUser = async (req, res) => {
        const { followerId, followedId } = req.params;
        const status = await dao.deleteUserFollowsUser(followerId, followedId);
        res.send(status);
    };
    const findUsersFollowedByUser = async (req, res) => {
        const { userId } = req.params;
        const following = await dao.findUsersFollowedByUser(userId);
        res.send(following);
    };
    const findUsersFollowingUser = async (req, res) => {
        const { userId } = req.params;
        const followers = await dao.findUsersFollowingUser(userId);
        res.send(followers);
    };
    const findFollower = async (req, res) => {
        const { followerId, followedId } = req.params;
        const follow = await dao.findFollower(followerId, followedId);
        res.send(follow);
    };

    app.get("/api/follows", findAllFollows);
    app.get("/api/follows/:followerId/follows/:followedId", findFollower);

    app.post("/api/follows/:followerId/follows/:followedId", createUserFollowsUser);
    app.delete(
        "/api/follows/:followerId/follows/:followedId",
        deleteUserFollowsUser
    );
    app.get("/api/follows/:userId/following", findUsersFollowedByUser);
    app.get("/api/follows/:userId/followers", findUsersFollowingUser);
}

export default FollowsRoutes;