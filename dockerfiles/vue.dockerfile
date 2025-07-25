# build stage
FROM node:slim AS build-stage

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

# Set the PORT environment variable to 3000 for the Vue development server
ENV PORT=3000

# Expose port 3000 internally within the Docker network
EXPOSE 3000


CMD ["npm", "run", "dev"]

# # production stage
# FROM nginx:alpine AS production-stage

# COPY --from=build-stage /app/dist /usr/share/nginx/html

# EXPOSE 3000

# CMD ["nginx", "-g", "daemon off;"]