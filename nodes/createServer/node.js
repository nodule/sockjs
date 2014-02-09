var server = sockjs.createServer({
  sockjs_url: input.url,
  prefix: input.prefix,
  response_limit: input.response_limit,
  websocket: input.websocket,
  heartbeat_delay: input.heartbeat_delay,
  disconnect_delay: input.disconnect_delay
});

output = {
  server: server
};
