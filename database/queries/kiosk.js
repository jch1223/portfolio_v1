const sql = require('sql-template-strings');

const TABLE_NAME = 'home_service_kiosk';
const { DB_NAME } = process.env;

// GET /api/kiosk
module.exports.GET_KIOSKS = (limit = 100, offset = 0) =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE isDeleted='N'
  ORDER BY id DESC
  LIMIT ${limit}
  OFFSET ${offset}
  ;
`);
module.exports.GET_KIOSKS_CNT = () =>
  sql`
  SELECT count(*) cnt
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`);

// POST /api/kiosk
module.exports.INSERT_KIOSK = (name, company, phone, content) =>
  sql`
  INSERT INTO `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  ( name, company, phone, content )
  VALUES ( ${name}, ${company}, ${phone}, ${content} );
`);

// GET /api/kiosk/:id
module.exports.GET_KIOSK_DETAIL = id =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE id=${id};
`);

// POST /api/kiosk/:id
module.exports.PUBLISH_KIOSK = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isPublished='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);

// PUT /api/kiosk/:id
module.exports.UPDATE_KIOSK = (name, company, phone, content, id) =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    name=${name},
    company=${company},
    phone=${phone},
    content=${content},
    updatedAt=NOW()
  WHERE id=${id};
`);

// DELETE /api/kiosk/:id
module.exports.DELETE_KIOSK = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isDeleted='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);
