const express = require('express');
const router = express.Router();
const boardApiHandler = require('./board');
const {
  getNotice,
  insertNotice,
  updateNotice,
  deleteNotice,
  publishNotice,
  getNoticeDetail
} = require('./notice');
const {
  getRecruit,
  insertRecruit,
  updateRecruit,
  deleteRecruit,
  publishRecruit,
  getRecruitDetail
} = require('./recruit');
const {
  getPress,
  insertPress,
  updatePress,
  deletePress,
  publishPress,
  getPressDetail
} = require('./press');
const {
  getKiosk,
  insertKiosk,
  updateKiosk,
  deleteKiosk,
  publishKiosk,
  getKioskDetail,
  getBizCompany,
  insertBizCompany,
  updateBizCompany,
  deleteBizCompany,
  publishBizCompany,
  getBizCompanyDetail
} = require('./service');

const { handleFiles, getImg } = require('./file');

// /api/
router.all('/board', boardApiHandler);

//notice
router
  .route('/notice')
  // .all()
  .get(getNotice)
  .post(insertNotice);
router
  .route('/notice/:id')
  // .all()
  .get(getNoticeDetail)
  .post(publishNotice)
  .put(updateNotice)
  .delete(deleteNotice);

//recruit
router
  .route('/recruit')
  // .all()
  .get(getRecruit)
  .post(insertRecruit);
router
  .route('/recruit/:id')
  // .all()
  .get(getRecruitDetail)
  .post(publishRecruit)
  .put(updateRecruit)
  .delete(deleteRecruit);

//press
router
  .route('/press')
  // .all()
  .get(getPress)
  .post(insertPress);
router
  .route('/press/:id')
  // .all()
  .get(getPressDetail)
  .post(publishPress)
  .put(updatePress)
  .delete(deletePress);

//service
router
  .route('/service/kiosk')
  // .all()
  .get(getKiosk)
  .post(insertKiosk);
router
  .route('/service/kiosk/:id')
  // .all()
  .get(getKioskDetail)
  .post(publishKiosk)
  .put(updateKiosk)
  .delete(deleteKiosk);
router
  .route('/service/bizCompany')
  // .all()
  .get(getBizCompany)
  .post(insertBizCompany);
router
  .route('/service/bizCompany/:id')
  // .all()
  .get(getBizCompanyDetail)
  .post(publishBizCompany)
  .put(updateBizCompany)
  .delete(deleteBizCompany);

router
  .route('/file')
  // .all()
  .post(handleFiles);

router
  .route('/file/:name')
  // .all()
  .get(getImg);

module.exports = router;
