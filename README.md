# README

## Embedded app

This app is a POC to test rendering the same Polaris react component from an embedded app in Shopify and from a regular route exposed from the application.

The POC used the react_on_rails gem (ref: https://github.com/shakacode/react_on_rails)
How to setup react_on_rails: https://www.shakacode.com/react-on-rails/docs/getting-started/

Ths app is exposing 2 routes for the POC, `/poc/products` and `/poc/embedded/products`.
React components are being registered through the `app/javascript/packs/hello-world-bundle.js` file, included in the HTML through the `app/views/layouts/hello_world.html.erb` layout file.

The main React component displayed in both views is defined in the `app/javascript/bundles/HelloWorld/components/HelloWorld.jsx` file.

## Admin links

An admin link is also being exposed to mock publish products. To implement this, a new extension was added through the Shopify Partners page point to the following URL: `http://localhost:3000/poc/embedded/products/publish`. The extension was made available under the `Product details` page in Shopify.
Once a request is received, the id of the product and store_url will be send as arguments by Shopify.
Example request:
```
Started GET "/poc/embedded/products/publish?embedded=1&hmac=XXXX&host=ZZZZ&id=1234&id_token=[FILTERED]&locale=en&session=ZZZ&shop=fabio-diff.myshopify.com&timestamp=1705955800" for ::1 at 2024-01-22 15:36:40 -0500
```
