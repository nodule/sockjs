module.exports = {
  name: "createServer",
  ns: "sockjs",
  description: "SockJS server",
  phrases: {
    active: "Creating SockJS server"
  },
  ports: {
    input: {
      url: {
        type: "string",
        title: "SockJS Url",
        description: "Transports which don't support cross-domain communication natively ('eventsource' to name one) use an iframe trick. A simple page is served from the SockJS server (using its foreign domain) and is placed in an invisible iframe. Code run from this iframe doesn't need to worry about cross-domain issues, as it's being run from domain local to the SockJS server. This iframe also does need to load SockJS javascript client library, and this option lets you specify its url (if you're unsure, point it to the latest minified SockJS client release, this is the default). You must explicitly specify this url on the server side for security reasons - we don't want the possibility of running any foreign javascript within the SockJS domain (aka cross site scripting attack). Also, sockjs javascript library is probably already cached by the browser - it makes sense to reuse the sockjs url you're using in normally.",
        "default": "http://cdn.sockjs.org/sockjs-0.3.min.js"
      },
      prefix: {
        type: "string",
        title: "Prefix",
        description: "A url prefix for the server. All http requests which paths begins with selected prefix will be handled by SockJS. All other requests will be passed through, to previously registered handlers.",
        "default": "/"
      },
      response_limit: {
        type: "integer",
        title: "Response Limit",
        description: "Most streaming transports save responses on the client side and don't free memory used by delivered messages. Such transports need to be garbage-collected once in a while. `response_limit` sets a minimum number of bytes that can be send over a single http streaming request before it will be closed. After that client needs to open new request. Setting this value to one effectively disables streaming and will make streaming transports to behave like polling transports. The default value is 128K.",
        "default": 131072
      },
      websocket: {
        type: "boolean",
        title: "Websocket?",
        description: "Some load balancers don't support websockets. This option can be used to disable websockets support by the server. By default websockets are enabled.",
        "default": true
      },
      heartbeat_delay: {
        type: "number",
        title: "Heartbeat Delay",
        description: "In order to keep proxies and load balancers from closing long running http requests we need to pretend that the connection is active and send a heartbeat packet once in a while. This setting controls how often this is done. By default a heartbeat packet is sent every 25 seconds.",
        "default": 25
      },
      disconnect_delay: {
        type: "number",
        title: "Disconnect Delay",
        description: "The server sends a `close` event when a client receiving connection have not been seen for a while. This delay is configured by this setting. By default the `close` event will be emitted when a receiving connection wasn't seen for 5 seconds.",
        "default": 5
      }
    },
    output: {
      server: {
        type: "Server",
        title: "Server"
      }
    }
  },
  dependencies: {
    npm: {
      sockjs: require('sockjs')
    }
  },
  fn: function createServer(input, $, output, state, done, cb, on, sockjs) {
    var r = function() {
      var server = sockjs.createServer({
        sockjs_url: $.url,
        prefix: $.prefix,
        response_limit: $.response_limit,
        websocket: $.websocket,
        heartbeat_delay: $.heartbeat_delay,
        disconnect_delay: $.disconnect_delay
      });

      output = {
        server: $.create(server)
      };
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}