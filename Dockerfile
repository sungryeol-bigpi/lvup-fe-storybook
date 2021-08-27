FROM node:14-alpine
# sb init으로 나오는 커맨드를 그대로 사용
RUN mkdir -p /home/node/storybook
WORKDIR /home/node/storybook
ENV FE_DIR=./lvup-fe/
COPY ${FE_DIR}package.json ./package.json
COPY ${FE_DIR}yarn.lock ./yarn.lock
COPY ${FE_DIR}vue.config.js ./vue.config.js
COPY ${FE_DIR}babel.config.js ./babel.config.js
COPY ${FE_DIR}.env ./.env
COPY ${FE_DIR}.env.development ./.env.development
RUN npx sb init -f
RUN yarn add -D dotenv jest babel-jest
CMD yarn storybook -s ./public