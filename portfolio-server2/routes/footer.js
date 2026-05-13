import * as controller from '../controller/footer.js';
import express from 'express';

const router = express.Router();
router.get('/', controller.getFooter);
export default router;
