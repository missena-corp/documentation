---
sidebar_position: 2
---

# Pass Sans Pub

## Description

**Pass Sans Pub** is a service that allows users to navigate websites without tracking and without ads.

## Integration

In order to integrate **Pass Sans Pub** into your website you need to provide us with a javascript function that would disable the display of the ads on your page and you need to add the following script tag to the head section of your page.

```javascript
<script>
  const tokenKey = "__nt";
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get(tokenKey) || localStorage.getItem(tokenKey);
  const url = new URL("https://api.noad.club/");
  url.searchParams.set("t", /* put your key here */);
  if (token) {
    localStorage.setItem(tokenKey, token);
    url.searchParams.set(tokenKey, token);
  }
  const script = document.createElement("script");
  script.setAttribute("src", url);
  document.head.appendChild(script);
</script>
```

Upon a successful activation of the service, the javascript function that you provided will be called to disable the ads.

The `publisherKey` is the key provided to you by us during the on-boarding process.

## Technical details

The puchase flow relies on link decoration of URL of the page that initiated the purchase. The user will be redirected to the Missena side of the app that handles the purchase of the service. Upon succesful purchase or login, the user will be redirected back to the page that initiated the flow with one or more search parameters added (e.g. `__nt`). Please make sure that your website is capable of accomodating these extra parameters.
