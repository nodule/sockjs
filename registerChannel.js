module.exports = {
  name: "registerChannel",
  ns: "sockjs",
  title: "Register Channel",
  description: "SockJS Multiplex Channel Register",
  phrases: {
    active: "Registering channel {{input.channel}}"
  },
  ports: {
    input: {
      multiplex: {
        type: "MultiplexServer",
        title: "MultiPlex",
        required: true
      },
      channel: {
        type: "string",
        title: "Channel",
        required: true
      }
    },
    output: {
      out: {
        type: "Channel",
        title: "Channel"
      }
    }
  },
  fn: function registerChannel(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.create($.multiplex.registerChannel($.channel));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}