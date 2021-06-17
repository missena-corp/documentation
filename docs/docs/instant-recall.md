---
sidebar_position: 3
---

# Instant Recall

## Description

Intant Recall is a service that allows users to save to their email products from merchant websites.

## Integrate using Open Graph

The service relies on [Open Graph Protocol](https://en.wikipedia.org/wiki/Facebook_Platform#Open_Graph_protocol) data about the product displayed on the page. The following properties are required: `og:title`, `og:description`, `og:url`, `og:image`, `og:price:amount`, `og:price:currency` and the `<meta property="og:type" content="product">` element to signify that this is a product page. Here is a sample section:

```html
<meta property="og:type" content="og:product" />
<meta property="og:title" content="Friend Smash Coin" />
<meta
  property="og:image"
  content="http://www.friendsmash.com/images/coin_600.png"
/>
<meta
  property="og:description"
  content="Friend Smash Coins to purchase upgrades and items!"
/>
<meta property="og:url" content="http://www.friendsmash.com/og/coins.html" />
<meta property="og:price:amount" content="0.30" />
<meta property="og:price:currency" content="EUR" />
```

## Integrate using `window` object

If for some reason you do not wish to add this meta data to your page head element, you need to ensure that a javascript object named `__ir_metadata` with the meta data of the product is created and added to the `window` object.

```javascript
<script>
window.__ir_metadata = {
  title: "Friend Smash Coin",
  description: "Friend Smash Coins to purchase upgrades and items!",
  url: "http://www.friendsmash.com/og/coins.html",
  image: "http://www.friendsmash.com/images/coin_600.png",
  ammount: 0.30,
  currency: "EUR",
};
</script>
```

Once you ensure that the product metadata is present on the page, add the following element to the `head` section of your product pages:

```javascript
<script src="https://api-ir.missena.xyz/?t=merchantKey"></script>
```

The `merchantKey` is the key provided to you by us during the on-boarding process.