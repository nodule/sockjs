var options = input;
options.sockjsurl = input.url;

var server = sockjs.createServer(options);
output = {
  server: server
};
