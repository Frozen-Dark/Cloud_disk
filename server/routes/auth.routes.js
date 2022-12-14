// const Router = require('express')
// const router = new Router()
// require('dotenv').config()
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const {User} = require('../models/models')
// const ApiError = require("../error/ApiError");
//
// const generateJwt = (id, email) => {
//     return jwt.sign(
//         {id, email},
//         process.env.SECRET_KEY,
//         {expiresIn: '24h'}
//     )
//
// }
//
// router.post('/registration', async (req, res) => {
//     try {
//         const {email, password} = req.body  // Вытаскиваем данные с POST
//
//         if(!email || !password) { // Проверка данных
//             return next(ApiError.badRequest('Неккоректная почта или пароль'))
//         }
//
//         const candidate = await User.findOne({where: {email}}) // Вытаскиваем данные с бд
//
//         if(candidate) {  // Проверка пользователя
//             return next(ApiError.badRequest('Пользователь с такой почтой уже существует'))
//         }
//
//         const hashPassword = await bcrypt.hash(password, 5) // Шифруем пароль
//
//         const user = await User.create({email, password: hashPassword}) // Создаем пользователя
//
//         return res.json({message: `Пользователь ${email} создан`})
//
//     } catch (e) {
//         console.log(e)
//         res.send({message: "Server error"})
//     }
// })
// router.post('/login', async (req, res) => {
//     try {
//         const {email, password} = req.body
//         const user = await User.findOne({where: {email}})
//         if(!user) {
//             res.send({message: "Неверная почта"})
//         }
//         let comparePassword = bcrypt.compareSync(password, user.password)
//         if (!comparePassword) {
//             res.send({message: "Неверный пароль"})
//         }
//         const token = generateJwt(user.id, user.email, user.role)
//         return res.json({
//             token,
//             user: {
//                 id: user.id,
//                 email: user.email,
//                 diskSpace: user.diskSpace,
//                 usedSpace: user.usedSpace,
//                 avatar: user.avatar
//             }
//         })
//     } catch (e) {
//         console.log(e)
//         res.send({message: "Server error"})
//     }
//
// })
//
// module.exports = router
//
//
//
//
//
//
//
// // router.post('/user', userController.createUser)
// // router.get('/user', userController.getUsers)
// // router.get('/user/:id', userController.getOneUser)
// // router.put('/user', userController.updateUser)
// // const userController = require('../controller/user.controller')
// // router.delete('/user/:id', userController.deleteUser)
// //
// // module.exports = router