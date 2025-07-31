# using staged builds
FROM node:slim AS builder
# make the directory where the project files will be stored
# set it as the working directory so that we don't need to keep referencing it
WORKDIR /app
# Copy the package.json file
COPY package*.json .
# install project dependencies
RUN npm install
# copy project files 
COPY . .
#Run NPM
RUN npm run build

# Use a lightweight Node.js base image for running the Next.js app
FROM node:slim AS production

WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./package.json
# Copy public assets
COPY --from=builder /app/public ./public 

# Expose port 5000 (Next.js default) internally
EXPOSE 5000

CMD ["npm", "run", "dev"]

