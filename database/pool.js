const config = require('../config/config');
const mariadb = require('mariadb');

const dbconfig = {
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
  database: config.database,
  connectionLimit: config.connectionLimit,
  charset: config.charset
};

let pool = null

// let _connection = null;

// pool.getConnection().then(conn => {
//   _connection = conn;
// });

async function queryAsync(sql, args) {

  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(sql, args);
    conn.release();
    return res;
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

const queryCallback = ({ sql, values }) => {
  // console.log('SQL:', sql, values);
  pool = pool || mariadb.createPool(dbconfig);
  return new Promise((resolve, reject) =>
    pool
      .getConnection()
      .then(conn => {
        conn
          .query(sql, values)
          .then(data => {
            resolve(data);
            conn.end();
          })
          .catch(err => {
            conn.end();
            throw err;
          });
      })
      .catch(err => {
        reject(err);
      })
  );
};

module.exports = queryCallback;
