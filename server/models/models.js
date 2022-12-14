const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // INTEGER - Числовой
    email: {type: DataTypes.STRING, unique: true,}, // STRING - Строковый, unique - уникальный
    password: {type: DataTypes.STRING},
    diskSpace: {type: DataTypes.INTEGER, defaultValue: 1024},
    usedSpace: {type: DataTypes.INTEGER, defaultValue: 0},
    avatar: {type: DataTypes.STRING},
})

const File = sequelize.define('file', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    access_link: {type: DataTypes.STRING},
    size: {type: DataTypes.INTEGER},
    user_id: {type: DataTypes.INTEGER},

})

User.hasMany(File)
File.belongsTo(User)

module.exports = {
    User,
    File
}


