# is-even and is-odd, but _this time it’s an API_

A shitty meme as a shitty service
We've all seen the is-even and is-odd packages on npm, but can you really call yourself a 10x developer if you're not using all the APIs™?



## The API

Use the free API in your app.

Why? Because you're a goddamn 10x developer, that's why.

### Making a Request

Make a `GET` request to `https://api.spaceburrito.xyz/evenorodd/{number}`

```javascript
fetch('https://api.spaceburrito.xyz/evenorodd/69').then(function(res) {
    console.log(res.numberType);
    // odd
});
```



### Responses

#### 200 - OK

Make your 10x dreams come true.

```json
{
    "status": 200,
    "input": "69",
    "numberType": "odd"
}
```



#### 400 - Invalid Request

It’s Intern Season™.

```json
{
    "status": 400,
    "message": "no number was supplied"
}
```

```json
{
    "status": 400,
    "message": "You can only check if an integer is even or odd"
}
```



#### 413 - Request too large

That number you entered is either outside the JavaScript min/max safe integer size, or you’ve just entered too many number.

```json
{
    "status": 413,
    "message": "You've entered /way/ too many numbers"
}
```

```json
{
    "status": 413,
    "message": "Integers shouldn't be larger than the MIN_SAFE_INTEGER"
}
```

```json
{
    "status": 413,
    "message": "Integers shouldn't be larger than the MAX_SAFE_INTEGER"
}
```



#### 429 - Rate Limit Exceeded

10x developer does not mean 10x my bandwidth costs. You can make up to 1000 requests inside a 15 minute window.

```json
{
    "status": 429,
    "message": "Maybe calm down there with the requests there you big shot 10x-er"
}
```

### FAQ

#### Why can't I access the API or Docs?
Probably because you've been marked as suspicious and have been blocked by the Cloudflare firewall.

#### Is this API supposed to be some kind of joke
I am a serious developer. This API is a powerful tool and should be treated with respect. I would never do such a thing like that
