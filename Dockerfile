# Use the official image as a parent image.
FROM node:9-alpine

# Choose workspace directory
WORKDIR ./

# Copy rollup config file 
COPY rollup.config.js ./

# Copy contents of package.json and package-lock.json to this directory
COPY package*.json ./

# Install all the dependecies
RUN npm install

# Bundle app source
COPY . .

# build project
RUN npm run-script build

# Expose your application on a port
EXPOSE 5000

# Set host to 0.0.0.0 to accept connections on all network interface
ENV HOST=0.0.0.0

# Provide command to start your application
CMD ["npm", "start"]