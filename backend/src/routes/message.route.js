import express from 'express';
import { getAllContacts,getMessagesByUserId,sendMessage,getChatPartners} from '../controllers/message.controller.js';
import {protectRoute} from '../middleware/auth.middleware.js';
import {arcjetProtection} from '../middleware/arcjet.middleware.js'

const router = express.Router();

router.get("/contacts",arcjetProtection,protectRoute,getAllContacts);
router.get("/chats",arcjetProtection,protectRoute,getChatPartners);
router.get("/:id",arcjetProtection,protectRoute,getMessagesByUserId);
router.post("/send/:id",arcjetProtection,protectRoute,sendMessage);

export default router;