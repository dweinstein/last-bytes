# SYNOPSIS

Keep the last count bytes around from a stream.

# EXAMPLE

```js
var lastBytes = require('last-bytes')
var spawn = require('child_proc').spawn

var ps = child_proc.spawn(...)
// keep 1024 bytes around from the stream, at given time only that much
var stderrBuf = lastBytes(1024, ps.stderr)

// at any given time we can inspect the last 1K of stderr:
setTimeout(() => {
  console.log(stderrBuf.toString()))
}, 1000)

```

# Note

Interface is still in flux thus < 1.0.0. I'm not happy about passing the source
in as an argument. I feel like we should just return a stream-like that you can
pipe into but also call something like `.read` or something.
