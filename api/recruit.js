const {
  GET_RECRUITS,
  GET_RECRUIT_DETAIL,
  UPDATE_RECRUIT,
  INSERT_RECRUIT,
  DELETE_RECRUIT,
  PUBLISH_RECRUIT
} = require('../database/queries/recruit');

module.exports.getRecruit = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const data = await req.db(GET_RECRUITS(+limit || 100, +offset || 0));
    items = Array.from(
      data,
      ({
        id,
        tag,
        title,
        content,
        url,
        subtitle1,
        subtitle2,
        subtitle3,
        deadlineText,
        createdAt,
        isDeleted
      }) => ({
        index: id,
        tag: tag,
        title: title,
        content: content,
        url: url,
        deadline: deadlineText,
        content1: subtitle1,
        content2: subtitle2,
        content3: subtitle3,
        createdAt: createdAt
          .toISOString()
          .split('T')[0]
          .replace(/-/g, '.'),
        // isPublished: isPublished,
        isDeleted: isDeleted
      })
    );
    // console.log(items);
    res.send(items);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

module.exports.insertRecruit = async (req, res, next) => {
  try {
    const { title, tag, subtitle1, subtitle2, subtitle3, deadlineText, content, url } = req.body;
    const data = await req.db(
      INSERT_RECRUIT(title, tag, subtitle1, subtitle2, subtitle3, deadlineText, content, url)
    );
    // console.log(data);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.getRecruitDetail = async (req, res, next) => {
  try {
    const data = await req.db(GET_RECRUIT_DETAIL(req.params.id));
    if (!data.length) throw 404;
    // if (data[0].isPublished === 'N') throw 403;
    res.send(data);
  } catch (e) {
    res.status(e).send();
  }
};

module.exports.updateRecruit = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { title, tag, subtitle1, subtitle2, subtitle3, deadlineText, content, url } = req.body;
    const data = await req.db(
      UPDATE_RECRUIT(
        title,
        tag,
        subtitle1,
        subtitle2,
        subtitle3,
        deadlineText,
        content,
        req.params.id,
        url
      )
    );
    res.status(202).send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports.publishRecruit = async (req, res, next) => {
  try {
    const data = await req.db(PUBLISH_RECRUIT(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports.deleteRecruit = async (req, res, next) => {
  try {
    const data = await req.db(DELETE_RECRUIT(req.params.id));
    res.status(202).send(data);
  } catch (e) {
    res.status(500).send();
  }
};
