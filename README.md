# Dockerized Storybook for lvup-fe

## 사용법

1. `lvup-fe`리파지토리를 폴더 내부에서 `git clone` 한다
```sh
git clone https://...
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── lvup-fe
│   ├── README.md
│   ├── babel.config.js
│   ├── node_modules
│   ├── package.json
│   ├── public
│   ├── server
│   ├── src
│   ├── vue.config.js
│   └── yarn.lock
└── stories
```
2. `docker-compose`를 이용해 도커 이미지를 빌드하고 실행한다
```sh
docker-compose up
```

## 패키지 또는 환경변수(package.json, .env 등)를 업데이트할 경우
```sh
docker-compose up --build
```

## 주의사항

- 컴포넌트 `git push`는 반드시 `lvup-fe` 폴더 내부에서 해 주세요.
- 스토리북 `git push`는 반드시 `stories` 폴더 내부에서 해 주세요. 