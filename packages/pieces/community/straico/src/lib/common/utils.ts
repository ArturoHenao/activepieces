import {
  httpClient,
  HttpMethod,
  HttpRequest,
  AuthenticationType,
} from '@activepieces/pieces-common';

export const straicoWebhookPostRequest = async ({
  token,
  url,
  eventType,
  capabilityId,
  endpoint,
}: StraicoWebhookPostRequestParams) => {
  const request: HttpRequest<StraicoWebhookPostRequestBody> = {
    method: HttpMethod.POST,
    url: url,
    body: {
      token: token,
      event_type: eventType,
      capability_id: capabilityId,
      endpoint: endpoint,
    },
    authentication: {
      type: AuthenticationType.BEARER_TOKEN,
      token,
    },
  };

  const response = await httpClient.sendRequest(request);

  return {
    success: true,
    request_body: request.body,
    response_body: response.body,
  };
};

type StraicoWebhookPostRequestParams = {
  token: string;
  url: string;
  eventType: string;
  capabilityId: string;
  endpoint: string;
};

type StraicoWebhookPostRequestBody = {
  token: string;
  event_type: string;
  capability_id: string;
  endpoint: string;
};
