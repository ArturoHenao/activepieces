import {
    createTrigger,
    Property,
    TriggerStrategy,
  } from '@activepieces/pieces-framework';
import { straicoCommon } from '../common/common';
import { straicoWebhookPostRequest } from '../common/utils';
import { straicoAuth } from '../../index';

type TriggerData = {
    webhookId: string;
  };
  
  const TRIGGER_DATA_STORE_KEY = 'straico_capability_callback_data';


export const capabilityCallback = createTrigger({
    auth: straicoAuth,
    name: 'capabilityCallback',
    displayName: 'Capability Callback',
    description: 'When a capability processing flow arrives',
    props: {
        capability_id: Property.ShortText({
                displayName: 'Capability ID',
                description:
                  'Naviate to capabilities page, copy the Id from the capability you are going to use',
                required: true,
        }),
    },
    sampleData: {
        title : "Mario Party with friends!",
        start_datetime: "15/06/2024 11:00 a.m.",
        end_datetime: "15/06/2024 11:30 a.m.",
        location: "Roro's House",
        invitee: "arturo@gmail.com",
    },
    type: TriggerStrategy.WEBHOOK,
    async onEnable(context){
        const token = "Rh-qNJ9ofSZuBeHheY2B3AdK83AbC7LDyT85vBgNu8ehhwdksE7"
        const capabilityId = context.propsValue['capability_id'];
        const url = `${straicoCommon.baseUrl}/${straicoCommon.webhooks}`;
        const eventType = 'CAPABILITY_TRIGGERED';
        const endpoint = context.webhookUrl;

    
        const { response_body } = await straicoWebhookPostRequest({
          token,
          url,
          eventType,
          capabilityId,
          endpoint,
        });

        await context.store?.put<TriggerData>(TRIGGER_DATA_STORE_KEY, {
            webhookId: response_body['_id'],
        });
    },
    async onDisable(context){
        // implement webhook deletion logic
    },
    async run(context){
        return [context.payload.body]
    }
})