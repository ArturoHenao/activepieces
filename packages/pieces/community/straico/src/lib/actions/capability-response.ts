import { createAction, Property } from '@activepieces/pieces-framework';

export const capabilityResponse = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'capabilityResponse',
  displayName: 'Capability response',
  description: 'Once a capability has been processed, it talks back to Straico',
  props: {},
  async run() {
    // Action logic here
  },
});
