FROM node:lts

WORKDIR /app

COPY . .

RUN rm .env*

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false


ENV HOST 0.0.0.0
ENV PORT 8080
ENV CMS_URL "https://strapi.s.wattsense.com"
ENV CONSOLE_API "https://console.wattsense.com/api"

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
