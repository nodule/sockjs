module.exports = {
  name: "close",
  ns: "sockjs",
  description: "Close Connection",
  phrases: {
    active: "Closing Connection"
  },
  ports: {
    input: {
      conn: {
        type: "Connection",
        title: "SockJS Connection",
        required: true
      },
      code: {
        type: "integer",
        title: "Status Code",
        required: true
      },
      message: {
        type: "any",
        title: "Close message",
        required: true
      }
    },
    output: {}
  },
  fn: function close(input, $, output, state, done, cb, on) {
    var r = function() {
      $.conn.close($.code, $.message);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}