var server = sockjs.createServer({
  sockjs_url: $.url,
  prefix: $.prefix,
  response_limit: $.response_limit,
  websocket: $.websocket,
  heartbeat_delay: $.heartbeat_delay,
  disconnect_delay: $.disconnect_delay
});

output = {
  server: server
};
