import express from 'express';
import * as controller from '../controller/content.js'

const router = express.Router();
router.get('/home',controller.getHome);
router.get('/about',controller.getAbout);
router.get('/skills',controller.getSkills);
router.get('/work',controller.getWork);
router.get('/testimonials',controller.getTestimonials);
router.get('/work/project/:pid',controller.getProject);

export default router;