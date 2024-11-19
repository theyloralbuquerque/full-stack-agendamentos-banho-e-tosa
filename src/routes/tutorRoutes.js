import { Router } from 'express';
import tutorController from '../controllers/TutorController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', tutorController.index);
router.post('/', loginRequired, tutorController.create);
router.put('/:id', loginRequired, tutorController.update);
router.get('/:id', tutorController.show);
router.delete('/:id', loginRequired, tutorController.delete);

export default router;
