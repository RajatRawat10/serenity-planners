import { Router } from 'express';
import { createEnquiry } from '../controllers/enquiryController.js';
import { validateEnquiry } from '../validators/enquiryValidator.js';

const router = Router();

// POST /api/enquiries
router.post('/', validateEnquiry, createEnquiry);

export default router;
