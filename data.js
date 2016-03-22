module.exports = {
  name: "data",
  ns: "sockjs",
  description: "Connection Data Event",
  phrases: {
    active: "Receiving connection data"
  },
  ports: {
    input: {
      conn: {
        type: "Connection",
        title: "SockJS Connection",
        required: true,
        description: "SockJS Connection"
      }
    },
    output: {
      message: {
        type: "string",
        title: "Message",
        description: "Message"
      }
    }
  },
  fn: function data(input, $, output, state, done, cb, on) {
    var r = function() {
      $.conn.data('data', function dataCallback(message) {
        cb({
          message: message
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