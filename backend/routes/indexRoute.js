const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.welcome);
router.post("/create-user", indexController.createUser);
router.get("/get-all-users", indexController.getAllUsers);
router.get('/get-user/:id', indexController.getUserById); 
router.put('/edit-user/:id', indexController.editUser);

module.exports = router;
