module.exports = {
  name: "InstallHandlers",
  ns: "sockjs",
  description: "SockJS Install Handlers",
  phrases: {
    active: "Installing Handlers"
  },
  ports: {
    input: {
      server: {
        type: "Server",
        title: "SockJS server",
        required: true,
        description: "SockJS Server"
      },
      http: {
        type: "Server",
        title: "HTTP server",
        required: true,
        description: "Node.js HTTP Server"
      },
      prefix: {
        type: "string",
        title: "Prefix",
        description: "A url prefix for the server. All http requests which paths begins with selected prefix will be handled by SockJS. All other requests will be passed through, to previously registered handlers."
      }
    },
    output: {
      server: {
        type: "Server",
        title: "SockJS server",
        description: "SockJS Server"
      }
    }
  },
  fn: function InstallHandlers(input, $, output, state, done, cb, on) {
    var r = function() {
      $.server.installHandlers($.http, {
        prefix: $.prefix
      });
      output = {
        server: $.create($.server)
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