# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app/api

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY ./ .

# Expose port 5000
EXPOSE 5000

# Start the Node.js app
CMD ["npm", "start"]
