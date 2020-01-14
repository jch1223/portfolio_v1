const sql = require('sql-template-strings');

const TABLE_NAME = 'home_news_board';
const { DB_NAME } = process.env;

// GET /api/recruit
module.exports.GET_PRESSES = (limit = 100, offset = 0) =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE isDeleted='N'
  ORDER BY id DESC
  LIMIT ${limit}
  OFFSET ${offset}
  ;
`);

module.exports.GET_PRESSES_CNT = () =>
  sql`
  SELECT count(*) cnt
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`);

// POST /api/recruit
module.exports.INSERT_PRESS = (title, imgUrl, newsUrl, company, content) =>
  sql`
  INSERT INTO `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  (title, imgUrl, newsUrl, company, content)
  VALUES ( ${title}, ${imgUrl},${newsUrl},${company},${content} );
`);

// GET /api/recruit/:id
module.exports.GET_PRESS_DETAIL = id =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE id=${id};
`);

// POST /api/recruit/:id
module.exports.PUBLISH_PRESS = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isPublished='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);

// PUT /api/recruit/:id
module.exports.UPDATE_PRESS = (title, imgUrl, newsUrl, company, content, id) =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    title=${title},
    imgUrl=${imgUrl},
    newsUrl=${newsUrl},
    company=${company},
    content=${content},
    updatedAt=NOW()
  WHERE id=${id};
`);

// DELETE /api/recruit/:id
module.exports.DELETE_PRESS = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isDeleted='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);
