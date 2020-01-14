const sql = require('sql-template-strings');

const TABLE_NAME = 'home_service_biz_company';
const { DB_NAME } = process.env;

// GET /api/bizCompany
module.exports.GET_BIZCOMPANIES = (limit = 100, offset = 0) =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE isDeleted='N'
  ORDER BY id DESC
  LIMIT ${limit}
  OFFSET ${offset}
  ;
`);
module.exports.GET_BIZCOMPANIES_CNT = () =>
  sql`
  SELECT count(*) cnt
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`);

// POST /api/bizCompany
module.exports.INSERT_BIZCOMPANY = (name, company, phone, content) =>
  sql`
  INSERT INTO `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  ( name, company, phone, content )
  VALUES ( ${name}, ${company}, ${phone}, ${content} );
`);

// GET /api/bizCompany/:id
module.exports.GET_BIZCOMPANY_DETAIL = id =>
  sql`
  SELECT * 
  FROM `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  WHERE id=${id};
`);

// POST /api/bizCompany/:id
module.exports.PUBLISH_BIZCOMPANY = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isPublished='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);

// PUT /api/bizCompany/:id
module.exports.UPDATE_BIZCOMPANY = (name, company, phone, content, id) =>
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

// DELETE /api/bizCompany/:id
module.exports.DELETE_BIZCOMPANY = id =>
  sql`
  UPDATE `.append(`${DB_NAME}.${TABLE_NAME}`).append(sql`
  SET 
    isDeleted='Y',
    updatedAt=NOW()
  WHERE id=${id};
`);
