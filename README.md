# timestamp-microservice
FreeCodeCamp API Challenge #1

A web application that accepts a URI parameter in UNIX timestamp or natural language format, and returns a JSON object containing both unix and natural forms.

#### Example

Submitting either `/1465084800` OR `/June 5, 2016` will return:

```json
{
  "unix": 1465084800,
  "natural": "June 5, 2016"
}
```
