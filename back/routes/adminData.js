const {postAdminData, getFormData} = require('../controller/adminData');
const express = require('express');
const router = express.Router()
router.post('/adminForm',postAdminData)
router.get('/adminForm/',getFormData)

module.exports = router