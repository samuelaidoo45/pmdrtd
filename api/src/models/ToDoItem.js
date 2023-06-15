
const { DataTypes } = require('sequelize');
const db = require('../../config/database');
const User = require('./User');

const ToDoItem = db.define('ToDoItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('created', 'started', 'completed'),
    defaultValue: 'created',
  },
  pomodoroCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  workTime: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  breakTime: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
});

ToDoItem.belongsTo(User);

module.exports = ToDoItem;
