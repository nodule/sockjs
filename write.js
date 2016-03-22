module.exports = {
  name: "write",
  ns: "sockjs",
  title: "SockJS Write",
  description: "Connection Write",
  phrases: {
    active: "Writing message"
  },
  ports: {
    input: {
      message: {
        type: "any",
        title: "Message",
        required: true
      },
      conn: {
        type: "Connection",
        title: "SockJS Connection",
        required: true,
        description: "SockJS Connection"
      }
    },
    output: {}
  },
  fn: function write(input, $, output, state, done, cb, on) {
    var r = function() {
      $.conn.write($.message);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}