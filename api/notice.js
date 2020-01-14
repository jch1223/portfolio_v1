const {
  GET_NOTICES,
  GET_NOTICES_CNT,
  GET_NOTICE_DETAIL,
  UPDATE_NOTICE,
  INSERT_NOTICE,
  DELETE_NOTICE,
  PUBLISH_NOTICE
} = require('../database/queries/notice');

module.exports.getNotice = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const data = await req.db(GET_NOTICES(+limit || 100, +offset || 0));
    const dataCnt = await req.db(GET_NOTICES_CNT());
    items = Array.from(data, ({ id, title, updatedAt, isDeleted }) => ({
      index: id,
      title,
      date: updatedAt
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '.'),
      isDeleted: isDeleted
    }));

    res.send({ items: items, cnt: dataCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

module.exports.insertNotice = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const data = await req.db(INSERT_NOTICE(title, content));
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.getNoticeDetail = async (req, res, next) => {
  try {
    const data = await req.db(GET_NOTICE_DETAIL(req.params.id));
    if (!data.length) throw 404;
    // if (data[0].isPublished === 'N') throw 403;
    res.send(data);
  } catch (e) {
    res.status(e).send();
  }
};

module.exports.updateNotice = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const data = await req.db(UPDATE_NOTICE(title, content, req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.publishNotice = async (req, res, next) => {
  try {
    const data = await req.db(PUBLISH_NOTICE(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.deleteNotice = async (req, res, next) => {
  try {
    const data = await req.db(DELETE_NOTICE(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
