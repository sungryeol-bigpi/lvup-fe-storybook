# Dockerized Storybook for lvup-fe

## 사용법

1. `lvup-fe`리파지토리를 폴더 내부에서 `git clone` 한다
```sh
git clone https://...
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── jest.config.js
├── lvup-fe # clone된 내용이 이 폴더에 있어야 한다
│   └── ...
├── stories-fe
│   └── ...
└── unit-test
    └── ...
```
2. `docker-compose`를 이용해 도커 이미지를 빌드하고 실행한다
```sh
# 스토리북
docker-compose up
# 유닛 테스트(서비스가 동작하고 있을때 사용 가능)
docker-compose run storybook yarn jest
# 또는 watch하면서 유닛 테스트
docker-compose run storybook yarn jest --watchAll
# 특정 파일만 유닛 테스트
docker-compose run storybook yarn jest sample.test.js
```
3. 캐시로 인한 에러를 방지하기 위해, 작업이 완료되면 생성된 임시 컨테이너를 정기적으로 삭제해준다.
```sh
docker-compose down
```

## 패키지 또는 환경변수(package.json, .env 등)를 업데이트할 경우
```sh
docker-compose up --build
```

## 주의사항

- 컴포넌트 `git push`는 반드시 `lvup-fe` 폴더 내부에서 해 주세요.
- 스토리북 `git push`는 반드시 `stories` 폴더 내부에서 해 주세요. 
- 실행 이후 반드시 `docker-compose down` 해주세요.