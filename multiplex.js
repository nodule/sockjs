module.exports = {
  name: "multiplex",
  ns: "sockjs",
  title: "MultiPlexer",
  description: "SockJS Multiplexer",
  phrases: {
    active: "Multiplexing"
  },
  ports: {
    input: {
      service: {
        type: "object",
        title: "Service",
        required: true
      }
    },
    output: {
      multiplex: {
        type: "MultiplexServer",
        title: "MultiPlexer"
      }
    }
  },
  dependencies: {
    npm: {
      "websocket-multiplex": require('websocket-multiplex')
    }
  },
  fn: function multiplex(input, $, output, state, done, cb, on, websocket_multiplex) {
    var r = function() {
      output.multiplex = $.create(new websocket_multiplex.MultiplexServer($.service))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}