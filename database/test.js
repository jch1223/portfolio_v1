const mariadb = require('mariadb');
const config = require('../config/config');

const pool = mariadb.createPool(config);

const SQL = `SELECT * from chabot.chabot_home_notice;`;

// async function queryAsync(sql, args) {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     conn.query(sql, args);
//   } catch (err) {
//     throw err;
//   } finally {
//     if (conn) return conn.end();
//   }
// }

pool.getConnection().then(conn => {
  conn
    .query(SQL)
    .then(console.log)
    .catch(console.error);
});

// module.exports = queryAsync;
