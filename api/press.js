const {
  GET_PRESSES,
  GET_PRESSES_CNT,
  GET_PRESS_DETAIL,
  UPDATE_PRESS,
  INSERT_PRESS,
  DELETE_PRESS,
  PUBLISH_PRESS
} = require('../database/queries/press');

module.exports.getPress = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const data = await req.db(GET_PRESSES(+limit || 100, +offset || 0));
    const dataCnt = await req.db(GET_PRESSES_CNT());
    items = Array.from(
      data,
      ({ id, title, newsUrl, imgUrl, content, company, createdAt, isDeleted }) => ({
        index: id,
        title: title,
        company: company,
        newsUrl: newsUrl,
        imgUrl: imgUrl,
        content: content,
        createdAt: createdAt
          .toISOString()
          .split('T')[0]
          .replace(/-/g, '.'),
        // isPublished: isPublished,
        isDeleted: isDeleted
      })
    );
    // console.log(items);
    res.send({ items: items, cnt: dataCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

module.exports.insertPress = async (req, res, next) => {
  try {
    const { title, imgUrl, newsUrl, company, content } = req.body;
    const data = await req.db(INSERT_PRESS(title, imgUrl, newsUrl, company, content));
    // console.log(data);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.getPressDetail = async (req, res, next) => {
  try {
    const data = await req.db(GET_PRESS_DETAIL(req.params.id));
    if (!data.length) throw 404;
    // if (data[0].isPublished === 'N') throw 403;
    res.send(data);
  } catch (e) {
    res.status(e).send();
  }
};

module.exports.updatePress = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { title, imgUrl, newsUrl, company, content } = req.body;
    const data = await req.db(UPDATE_PRESS(title, imgUrl, newsUrl, company, content, req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.publishPress = async (req, res, next) => {
  try {
    const data = await req.db(PUBLISH_PRESS(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.deletePress = async (req, res, next) => {
  try {
    const data = await req.db(DELETE_PRESS(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
