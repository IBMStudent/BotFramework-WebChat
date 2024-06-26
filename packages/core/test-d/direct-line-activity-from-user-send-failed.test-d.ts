import { expectAssignable } from 'tsd';

import { type WebChatActivity } from '../src/index';

// All activities that failed to send, are activities that never reach the server (a.k.a. activity-in-transit).
expectAssignable<WebChatActivity>({
  channelData: {
    'webchat:send-status': 'send failed',
    'webchat:sequence-id': 0
  },
  from: {
    id: 'u00001',
    role: 'user'
  },
  localTimestamp: '2000-01-23T12:34:56.000Z', // Activity-in-transit must have local timestamp.
  text: 'Hello, World!',
  type: 'message'
});
