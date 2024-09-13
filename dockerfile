FROM node:lts-alpine
RUN apk add yarn curl
RUN apk add --no-cache git openssh

WORKDIR /app

# install production dependencies only
COPY package.json /app/package.json
RUN ["yarn", "install"]

# build app
COPY . /app
ENV NODE_ENV production
RUN ["yarn", "build"]

ENV PORT 3000
EXPOSE 3000

# enable health check
HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1

# start app
CMD ["yarn", "start"]
# CMD ["yarn", "dev"]