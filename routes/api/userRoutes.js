const router = require('express').Router();

const {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);



module.exports = router;