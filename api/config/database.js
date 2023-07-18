
// const { Sequelize } = require('sequelize');

// module.exports = new Sequelize('pomodoropal', 'newuser', 'password', {
//   host: '127.0.0.1',
//   port: '3306',
//   dialect: 'mysql',
// });



const { Sequelize } = require('sequelize');

module.exports = new Sequelize('tivateo2_pomodoro', 'tivateo2_pomodo', 'ab#%BE?5c,Uc', {
  host: 'tivateonline.com',
  port: '3306',
  dialect: 'mysql',
});
