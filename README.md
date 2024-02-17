# Request Header Parser Node.js

This API provides a single endpoint that returns basic information about the user making the request, including their IP address, preferred language, and browser software.

### Endpoint

    GET /api/whoami

#### Response

A JSON object containing the following properties:

    ipaddress: The IP address of the user making the request.
    language: The preferred language of the user, as indicated by their browser settings.
    software: The browser software being used by the user.

#### Example Response

```json
{
    "ipaddress": "127.0.0.1",
    "language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
    "software":	"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0"
}
```

### Setup

1. **Clone Repository:**
   ```bash
   git clone <repository_url>
   ```
   
3. **Install Dependencies:**
   ```bash
    npm install
   ```
   
3. **Run the Application:**
   ```bash
    npm start
   ```
