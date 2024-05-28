// testing this thing
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
export const capabilityCallback = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'capabilityCallback',
    displayName: 'Capability Callback',
    description: 'When a capability processing flow arrives',
    props: {},
    sampleData: {},
    type: TriggerStrategy.WEBHOOK,
    async onEnable(context){
        // implement webhook creation logic
    },
    async onDisable(context){
        // implement webhook deletion logic
    },
    async run(context){
        return [context.payload.body]
    }
})