FROM node:14-alpine
# sb init으로 나오는 커맨드를 그대로 사용
RUN mkdir -p /home/node/storybook
RUN mkdir -p /home/node/storybook/services/coaching
WORKDIR /home/node/storybook
ENV LVUP_DIR=./lvup-fe/services/coaching/
COPY ${LVUP_DIR}package.json ./package.json
# COPY ${LVUP_DIR}yarn.lock ./yarn.lock
COPY ${LVUP_DIR}vue.config.js ./vue.config.js
COPY ${LVUP_DIR}babel.config.js ./babel.config.js
COPY ${LVUP_DIR}.env ./.env
COPY ${LVUP_DIR}.env.development ./.env.development
RUN npx sb init -f
RUN rm -rf stories
RUN rm jest.config.js