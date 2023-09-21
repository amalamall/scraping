
# Ecommerce Scraper and Product Display

This project is a web application built using Next.js, Chakra UI, Node.js, Express.js, and MongoDB. Its main functionality is to take a home page URL for an e-commerce website, scrape product data, and display those products in a simple user interface.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Scraping Data](#scraping-data)
- [Blogs Page](#blogs-page)
- [Deployment](#deployment)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://www.docker.com/) installed on your machine.
- A web browser to access the application.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/amalamall/scraping.git
   cd ecommerce-scraper
   ```

2. Build the Docker containers:

   ```bash
   docker-compose up -d --build
   ```

### Running the Application

1. After building the Docker containers, the application should be running.

2. Access the application in your web browser at `http://localhost`.

## Usage

![Screenshot](https://github.com/amalamall/scraping/blob/main/screenshots/Screenshot1.png)

![Screenshot](https://github.com/amalamall/scraping/blob/main/screenshots/Screenshot2.png)

![Screenshot](https://github.com/amalamall/scraping/blob/main/screenshots/Screenshot3.png)

![Screenshot](https://github.com/amalamall/scraping/blob/main/screenshots/Screenshot4.png)


## Scraping Data

To start scraping data from jumia, follow these steps:

1. Access the route `localhost:5000/api/scrap/` to initiate the scraping process.

2. The application will collect product data, categorize it, and store it in the database.

3. You can access the collected product data through the UI.

## Blogs Page

![Screenshot](https://github.com/amalamall/scraping/blob/main/screenshots/Screenshot5.png)

## Deployment

You can access the deployed version of this application at [http://165.22.64.139/](http://165.22.64.139/).

## License

This project is licensed under the [MIT License](LICENSE.md).
