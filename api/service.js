
const {
  GET_KIOSKS,
  GET_KIOSKS_CNT,
  GET_KIOSK_DETAIL,
  UPDATE_KIOSK,
  INSERT_KIOSK,
  DELETE_KIOSK,
  PUBLISH_KIOSK
} = require('../database/queries/kiosk');
const {
  GET_BIZCOMPANIES,
  GET_BIZCOMPANIES_CNT,
  GET_BIZCOMPANY_DETAIL,
  UPDATE_BIZCOMPANY,
  INSERT_BIZCOMPANY,
  DELETE_BIZCOMPANY,
  PUBLISH_BIZCOMPANY
} = require('../database/queries/bizCompany');

//bizCompany
module.exports.getBizCompany = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const data = await req.db(GET_BIZCOMPANIES(+limit || 100, +offset || 0));
    const dataCnt = await req.db(GET_BIZCOMPANIES_CNT());
    items = Array.from(data, ({ id, name, company, phone, content, createdAt, isDeleted }) => ({
      index: id,
      name: name,
      company: company,
      phone: phone,
      content: content,
      createdAt: createdAt
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '.'),
      isDeleted: isDeleted
    }));
    // console.log(items);
    res.send({ items: items, cnt: dataCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
module.exports.insertBizCompany = async (req, res, next) => {
  try {
    const { name, company, phone, content } = req.body;
    const data = await req.db(INSERT_BIZCOMPANY(name, company, phone, content));
    // console.log(data);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
module.exports.getBizCompanyDetail = async (req, res, next) => {
  try {
    const data = await req.db(GET_BIZCOMPANY_DETAIL(req.params.id));
    if (!data.length) throw 404;
    // if (data[0].isPublished === 'N') throw 403;
    res.send(data);
  } catch (e) {
    res.status(e).send();
  }
};
module.exports.updateBizCompany = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { name, company, phone, content } = req.body;
    const data = await req.db(UPDATE_BIZCOMPANY(name, company, phone, content, req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
module.exports.publishBizCompany = async (req, res, next) => {
  try {
    const data = await req.db(PUBLISH_BIZCOMPANY(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
module.exports.deleteBizCompany = async (req, res, next) => {
  try {
    const data = await req.db(DELETE_BIZCOMPANY(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

//kiosk
module.exports.getKiosk = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const data = await req.db(GET_KIOSKS(+limit || 100, +offset || 0));
    const dataCnt = await req.db(GET_KIOSKS_CNT());
    items = Array.from(data, ({ id, name, company, phone, content, createdAt, isDeleted }) => ({
      index: id,
      name: name,
      company: company,
      phone: phone,
      content: content,
      createdAt: createdAt
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '.'),
      isDeleted: isDeleted
    }));
    // console.log(items);
    res.send({ items: items, cnt: dataCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
module.exports.insertKiosk = async (req, res, next) => {
  try {
    const { name, company, phone, content } = req.body;
    const data = await req.db(INSERT_KIOSK(name, company, phone, content));
    // console.log(data);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
module.exports.getKioskDetail = async (req, res, next) => {
  try {
    const data = await req.db(GET_KIOSK_DETAIL(req.params.id));
    if (!data.length) throw 404;
    // if (data[0].isPublished === 'N') throw 403;
    res.send(data);
  } catch (e) {
    res.status(e).send();
  }
};
module.exports.updateKiosk = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { name, company, phone, content } = req.body;
    const data = await req.db(UPDATE_KIOSK(name, company, phone, content, req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
module.exports.publishKiosk = async (req, res, next) => {
  try {
    const data = await req.db(PUBLISH_KIOSK(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
module.exports.deleteKiosk = async (req, res, next) => {
  try {
    const data = await req.db(DELETE_KIOSK(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
