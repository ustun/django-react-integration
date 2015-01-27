# django-react-integration
A sample project that shows integration between Django and React

The same content is rendered server-side and client-side for SEO purposes.

Important node: this is only if you want to have a server-side rendered page that reuses the react code. If you are just beginning with react or if your requirements do not need the SEO boost or slight performance boost (known as time to first tweet problem, see https://blog.twitter.com/2012/improving-performance-on-twittercom ) , there is no need for this integration.

- Uses webpack for bundling all clientside code to a single
- See Makefile inside the static folder in myapp
- Run `make server` inside myapp/static folder to run the node.js server.
- Run `make build` inside myapp/static folder to run the react build tools (client and server side).


