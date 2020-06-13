const { is, createEffect, forward, createEvent, guard } = require('effector');
const { readConfig } = require('../library');

function throttle(argument) {
  const { source, timeout, sid, loc, name } = readConfig(
    argument,
    (part, target) => {
      if (part.source) target.source = part.source;
      if (part.timeout) target.timeout = part.timeout;

      if (part.loc) target.loc = part.loc;
      if (part.name) target.name = part.name;
      if (part.sid) target.sid = part.sid;
    },
  );

  if (!is.unit(source))
    throw new TypeError('callee must be unit from effector');
  if (typeof timeout !== 'number' || timeout < 0)
    throw new Error('timeout must be positive number or zero');

  const actualName = name || source.shortName || 'unknown';

  const tick = createEvent({
    name: `${actualName}ThrottleTick`,
    loc,
  });

  const timer = createEffect({
    name: `${actualName}ThrottleTimer`,
    sid,
    loc,
    handler: (payload) =>
      new Promise((resolve) => setTimeout(resolve, timeout, payload)),
  });

  guard({
    source,
    filter: timer.pending.map((pending) => !pending),
    target: timer,
  });

  forward({
    from: timer.done.map(({ result }) => result),
    to: tick,
  });

  return tick;
}

module.exports = { throttle };
