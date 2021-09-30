FROM node:14

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false


ENV HOST 0.0.0.0
ENV PORT 8080
ENV CMS_URL "https://strapi.s.wattsense.com"
ENV API_ENDPOINT "https://console.s.wattsense.com/api/website/"
ENV TARGET "server"

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
