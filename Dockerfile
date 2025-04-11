# Use official Node.js image
FROM node:23-alpine3.20

# Create and set working directory
WORKDIR /usr/src/app

# Install app dependencies
#COPY package*.json ./
#RUN npm install

# Copy remaining source code (optional if using volume)
#COPY . .

# Default command (can be overridden)
#CMD ["npm", "start"]

