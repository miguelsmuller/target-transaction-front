FROM node:alpine AS build
ARG API_URL
WORKDIR /app
ENV API_URL=${API_URL}
COPY package.json /app/
RUN npm install
COPY ./ /app
RUN npm run build-prod



FROM nginx:alpine AS runtime
RUN rm -rf /usr/share/nginx/html/*
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=build  /app/dist/transaction-front-for-target /usr/share/nginx/html
COPY ./conf/set-env.sh .
RUN chmod +x set-env.sh
RUN ["sh", "set-env.sh"]

CMD ["nginx", "-g", "daemon off;"]
