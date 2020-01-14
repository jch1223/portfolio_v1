const sql = require('sql-template-strings');

const TABLE_NAME = 'home_notice_board';
const { DB_NAME } = process.env;

// GET /api/notice
module.exports.GET_NOTICES = (limit, offset = 0) =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE isDeleted='N'
  ORDER BY id DESC
  LIMIT ${limit}
  OFFSET ${offset};
`);
module.exports.GET_NOTICES_CNT = () =>
  sql`
  SELECT count(*) cnt
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`);

// POST /api/notice
module.exports.INSERT_NOTICE = (title, content) =>
  sql`
  INSERT INTO `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  ( title, content, isPublished )
  VALUES ( ${title}, ${content}, true );
`);

// GET /api/notice/:id
module.exports.GET_NOTICE_DETAIL = id =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE id=${id};
`);

// POST /api/notice/:id
module.exports.PUBLISH_NOTICE = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isPublished='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);

// PUT /api/notice/:id
module.exports.UPDATE_NOTICE = (title, content, id) =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    title=${title}, 
    content=${content}, 
    updatedAt=NOW()
  WHERE id=${id};
`);

// DELETE /api/notice/:id
module.exports.DELETE_NOTICE = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isDeleted='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);
