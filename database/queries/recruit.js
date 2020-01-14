const sql = require('sql-template-strings');

const TABLE_NAME = 'home_recruit_board';
const { DB_NAME } = process.env;

// GET /api/recruit
module.exports.GET_RECRUITS = (limit = 100, offset = 0) =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  ORDER BY id DESC
  LIMIT ${limit}
  OFFSET ${offset};
`);

// POST /api/recruit
module.exports.INSERT_RECRUIT = (
  title,
  tag,
  subtitle1,
  subtitle2,
  subtitle3,
  deadlineText,
  content
) =>
  sql`
  INSERT INTO `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  (title, tag, subtitle1, subtitle2, subtitle3, deadlineText, content, url)
  VALUES ( ${title}, ${tag},${subtitle1},${subtitle2},${subtitle3},${deadlineText}, ${content}, ${url} );
`);

// GET /api/recruit/:id
module.exports.GET_RECRUIT_DETAIL = id =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE id=${id};
`);

// POST /api/recruit/:id
module.exports.PUBLISH_RECRUIT = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isPublished='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);

// PUT /api/recruit/:id
module.exports.UPDATE_RECRUIT = (
  title,
  tag,
  subtitle1,
  subtitle2,
  subtitle3,
  deadlineText,
  content,
  id,
  url
) =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    title=${title},
    tag=${tag},
    url=${url},
    content=${content},
    subtitle1=${subtitle1},
    subtitle2=${subtitle2},
    subtitle3=${subtitle3},
    deadlineText=${deadlineText},
    url=${url},
    updatedAt=NOW()
  WHERE id=${id};
`);

// DELETE /api/recruit/:id
module.exports.DELETE_RECRUIT = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isDeleted='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);
