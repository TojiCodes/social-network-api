import { User, Thought } from '../models';

const amountOfUsers = async () => {
try {
    const numberOfUsers = await User.aggregate().count('userCount');
    return numberOfUsers;
} catch (err) {
    console.log(err);
    throw err;
}
};

const getUsers = async (req, res) => {
try {
    const users = await User.find();
    const userObj = {
    users,
    userCount: await amountOfUsers(),
    };
    return res.json(userObj);
} catch (err) {
    console.log(err);
    return res.status(500).json(err);
}
};

export {
getUsers,
getSingleUser,
createUser,
updateUser,
deleteUser,
addFriend,
removeFriend
};
