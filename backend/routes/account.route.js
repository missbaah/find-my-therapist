const router = require('express').Router()
const accountController = require('../controllers/account.controller');
const { authorize } = require('../controllers/auth.controller')

router.patch('/delete', authorize, accountController.requestAccountDeletion )
router.patch('/delete/:token', authorize, accountController.deleteAccount)

module.exports = router