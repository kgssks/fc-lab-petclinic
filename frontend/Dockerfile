# 1단계: 빌드 환경 (Node.js)
FROM node:16-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# 2단계: 실행 환경 (Nginx)
FROM nginx:stable-alpine
# 빌드 결과물을 Nginx 폴더로 복사
COPY --from=build /app/build /usr/share/nginx/html
# 커스텀 Nginx 설정 복사
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# 80 포트 노출
EXPOSE 80
# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]