# setting

1. mysql downloads : https://dev.mysql.com/downloads/windows/installer/8.0.html [view more](https://dev-overload.tistory.com/7)

2. mysql 데이터 생성 [view more](https://dev-overload.tistory.com/8)

```SQL
// CMD -> mysql open
mysql -u root -p

// DB 생성
CREATE DATABASE WEB_BOARD;

// DB 지정
USE WEB_BOARD;

// table 선택
CREATE TABLE POSTS(
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  TITLE VARCHAR(100) NOT NULL,
  USERNAME VARCHAR(30) NOT NULL,
  CONTENT TEXT NOT NULL,
  POSTDATE TIMESTAMP NULL DEFAULT NULL
);

// 기본 데이터 삽입
INSERT INTO POSTS(TITLE, USERNAME, CONTENT, POSTDATE)
VALUE ("Where does it come from?", "Romeo", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", TIMESTAMP("2022-01-23")),
("Hello", "Katy Perry", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", TIMESTAMP("2022-01-31")),
("Why do we use it?", "Sam smith", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", TIMESTAMP("2022-02-02")),
("Nice to meet you.", "Carrie Underwood", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", TIMESTAMP("2022-02-16")),
("Where can I get some?", "zayn", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", TIMESTAMP("2022-03-11")),
("Hello~~~!", "Taylor Swift", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", TIMESTAMP("2022-03-27")),
("What is Lorem Ipsum?", "conor maynard", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", TIMESTAMP("2022-03-30"));

// 데이터 조회
SELECT * FROM POSTS;

// 변경 사항 적용
FLUSH PRIVILEGES;

// mysql 접속 종료
EXIT;
```

3.

```
npm install cors
```

4.

```
npm install concurrently --save
npm run start
```

[](https://falaner.tistory.com/60?category=898434)
