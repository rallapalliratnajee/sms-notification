# SMS Notification
> simple easy to use nodejs express app to send sms notifications using twilio

## Preview
<img src="https://user-images.githubusercontent.com/80452137/175790954-d1debf19-f31b-47ac-867e-b203533249cf.png" height="550" width="1000"/>

## Installation
```sh
- git clone https://github.com/elregalo/sms-notification.git
- cd sms-notification
- npm install 
```
## Usage (start server)
```sh
- node index.js
```

### Curl
```sh
curl --location --request POST '127.0.0.1:3000/sms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mobile": "+27 00 000 0000"
}'
```
