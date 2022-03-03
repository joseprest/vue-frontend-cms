FROM node:14

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

ARG CMS_URL="https://strapi.site.com"
ARG API_ENDPOINT="https://console.site.com/api/website/"
ENV CMS_URL=$CMS_URL
ENV API_ENDPOINT=$API_ENDPOINT

ENV HOST "0.0.0.0"
ENV PORT 8080
ENV TARGET "server"

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
