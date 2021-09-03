import {Router} from 'express'
const router = Router()

import * as authCtrl from '../controllers/auth.controller'

router.post('/signup', authCtrl.singUp)
router.post('/signin', authCtrl.singin)
export default router;