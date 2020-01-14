
const boardApiHandler = function (req, res) {
  const boardDataSql = 'SELECT * FROM biz_board_1_info';

  req.db.getConnection(function (err, connection) {
    if (err) throw err;

    connection.query(boardDataSql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });

    connection.release();
  });
};

module.exports = boardApiHandler;
