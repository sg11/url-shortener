#URL Shortener Microservice API 
Created by sg11

###URL Shortener is a microservice API that accepts a URL and a shortened URL. This app is a project for the Back End Certification on FreeCodeCamp.

##User Stories:
 1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

 2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

 3. When I visit that shortened URL, it will redirect me to my original link.

##Example Usage:
```url
https://url-sng11.c9users.io/new/https://www.google.com
```
##Example Output:
```json
{"original-url":"https://www.google.com", "short-url":"https://url-sng11.c9users.io/83842"}
```