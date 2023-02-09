import * as Sequelize from 'sequelize'
import sequelizeConnection  from '../config/db.js'

export const Building = sequelizeConnection.define('building', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type:Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT(),
        allowNull: true,
    },
    title:{
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    area:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    num_toilets:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    num_rooms:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    num_parking:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    price:{
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
    }
})