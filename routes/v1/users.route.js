const express = require("express");
const usersApi = require("../../controller/users.controller");
const router = express.Router();

/**
 * GET /api/v1/data
 * @summary Get all data
 * @tags data
 * @desc Get all data
 * @access  Public
 * @return {object} 200 - An array of data
**/
router.get('/', usersApi.getUsers);

/**
 * POST /api/v1/data
 * @summary Create a new data
 * @tags data
 * @desc Create a new data
 * @access  Public
 * @return  the user id
**/
router.post('/', usersApi.postUser);

module.exports = router;