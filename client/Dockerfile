# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY ./ .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
