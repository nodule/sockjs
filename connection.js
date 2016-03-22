module.exports = {
  name: "connection",
  ns: "sockjs",
  description: "Connection Event",
  phrases: {
    active: "Connection event"
  },
  ports: {
    input: {
      server: {
        type: "Server",
        title: "SockJS server",
        required: true,
        description: "SockJS Server"
      }
    },
    output: {
      conn: {
        type: "Connection",
        title: "SockJS Connection",
        description: "SockJS Connection"
      }
    }
  },
  fn: function connection(input, $, output, state, done, cb, on) {
    var r = function() {
      $.server.connection('connection', function connectionCallback(conn) {
        cb({
          conn: conn
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}