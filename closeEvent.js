module.exports = {
  name: "closeEvent",
  ns: "sockjs",
  description: "Close Connection Event",
  phrases: {
    active: "Received Connection Close event"
  },
  ports: {
    input: {
      conn: {
        type: "Connection",
        title: "SockJS Connection",
        required: true,
        description: "SockJS Connection"
      },
      callback: {
        type: "function",
        title: "Callback Function",
        required: true
      }
    },
    output: {}
  },
  fn: function closeEvent(input, $, output, state, done, cb, on) {
    var r = function() {
      $.server.closeEvent('connection', function closeEventCallback() {
        cb({});
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