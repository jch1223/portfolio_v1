CREATE TABLE `chabot`.`home_notice_board` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `content` MEDIUMTEXT NOT NULL COMMENT '내용',
  `isDeleted` enum('Y','N') NOT NULL DEFAULT 'N' COMMENT '삭제여부',
  `isPublished` enum('Y','N') NOT NULL DEFAULT 'N' COMMENT '공개여부',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '마지막수정날짜',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chabot`.`home_recruit_board` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `tag` varchar(255) NOT NULL COMMENT '태그',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `subtitle1` varchar(100) NOT NULL COMMENT '부제목1',
  `subtitle2` varchar(100) NOT NULL COMMENT '부제목2',
  `subtitle3` varchar(100) NOT NULL COMMENT '부제목3',
  `url` varchar(100) NOT NULL COMMENT '채용링크',
  `content` MEDIUMTEXT NOT NULL COMMENT '내용',
  `deadlineText` varchar(50),
  `deadline` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '마감일',
  `isDeleted` enum('Y','N') NOT NULL DEFAULT 'N' COMMENT '삭제여부',
  `isPublished` enum('Y','N') NOT NULL DEFAULT 'N' COMMENT '공개여부',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '마지막수정날짜',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chabot`.`home_news_board` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `imgUrl` varchar(100) NOT NULL DEFAULT '',
  `newsUrl` varchar(100) NOT NULL DEFAULT '',
  `company` varchar(20) NOT NULL DEFAULT '',
  `content` MEDIUMTEXT NOT NULL DEFAULT '' COMMENT '내용',
  `isDeleted` enum('Y','N') NOT NULL DEFAULT 'N' COMMENT '삭제여부',
  `isPublished` enum('Y','N') NOT NULL DEFAULT 'N' COMMENT '공개여부',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '마지막수정날짜',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `chabot`.`home_notice_board` (
  `title`,
  `content`
  ) VALUES (
    '타이틀 1',
    '내용ㄴ이라ㅓ닝ㄹ'
  );

INSERT INTO `chabot`.`home_notice_board` (
  `title`,
  `content`
  ) VALUES (
    '타이틀 2',
    '내용ㄴ이라ㅓ닝ㄹ'
  );

INSERT INTO `chabot`.`home_notice_board` (
  `title`,
  `content`
  ) VALUES (
    '타이틀 3',
    '내용ㄴ이라ㅓ닝ㄹ'
  )