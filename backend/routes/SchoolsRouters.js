const express = require('express');
const SchoolController = require('../controllers/SchoolController');
const { validateAuthorization } = require('../middlewares/AuthMiddleware');
const { validateNewSchool } = require('../middlewares/SchoolMiddleware');

const SchoolsRouter = express.Router();

SchoolsRouter.get('/school', validateAuthorization, SchoolController.getAll);
SchoolsRouter.post('/school', [validateAuthorization, validateNewSchool], SchoolController.add);
SchoolsRouter.put('/school/:id', [validateAuthorization, validateNewSchool], SchoolController.update);
SchoolsRouter.delete('/school/:id', validateAuthorization, SchoolController.remove);

module.exports = SchoolsRouter;
