import fetchMock from 'jest-fetch-mock'

export const unitTestApiKey = 'deadb33fcafe'

interface ResponseBody {
  count?: number;
  results?: Array<Record<string, any>>;
  detail?: string;
  name?: string;
  id?: string;
  message?: string;
}

interface MockedResponse {
  data: string;
  message: string;
}

interface MockResponseInit {
  ok: boolean;
  status: number;
  body?: string;
  json?: () => Promise<MockedResponse>;
}

interface MockBodyFields {
  body?: string;
  json: () => Promise<MockedResponse>;
}

function formatResponseBody(body: ResponseBody): MockBodyFields{
  return {
    body: JSON.stringify(body),
    json: async () => body as unknown as MockedResponse
  }
}

export function setupRequestMocks() {
  fetchMock
    .mockIf(/^https:\/\/localhost:8000.*$/, async (req): Promise<MockResponseInit> => {
      if (req.headers.get('Authorization') !== 'Api-Key ' + unitTestApiKey) {
        return {ok: false, status: 403, ...formatResponseBody({detail: "Incorrect authentication credentials."})}
      }
      if (req.url.endsWith('/api/v1/environments/?name=default')) {
        return {ok: true, status: 200, ...formatResponseBody({count: 1, results: [{id: '1ec45f01-02d2-4046-a9d3-404be4327602', name: 'default'}]})}
      } else if (req.url.endsWith('/api/v1/environments/')) {
        return {ok: true, status:200, ...formatResponseBody({count: 2, results: [
        {id: '1ec45f01-02d2-4046-a9d3-404be4327602', name: 'default'},
        {id: '5fb2991a-f151-40f5-a05f-10f630acf178', name: 'staging'}
      ]})}
    } else if (req.url.endsWith('/api/v1/projects/?name=cloudtruth/configure-action')) {
      return {ok: true, status: 200, ...formatResponseBody({count: 1, results: [{id: '46266d6b-e430-42e2-a5fb-e7187ef3611c'}]})}
    } else if (req.url.endsWith('/api/v1/projects/?name=cloudtruth%2Fconfigure-action')) {
      return {ok: true, status: 200, ...formatResponseBody({count: 1, results: [{id: '46266d6b-e430-42e2-a5fb-e7187ef3611c'}]})}
    } else if (req.url.endsWith('/api/v1/projects/?name=cloudtruth%252Fconfigure-action')) {
      return {ok: true, status: 200, ...formatResponseBody({count: 1, results: [{id: '46266d6b-e430-42e2-a5fb-e7187ef3611c'}]})}
    } else if (req.url.endsWith('/api/v1/projects/?name=empty')) {
      return {ok: true, status: 200, ...formatResponseBody({count: 1, results: [{id: '93712239-500a-456e-b1c6-6d8290912067'}]})}
    } else if (req.url.endsWith('/api/v1/projects/?name=not_a_real_project_name')) {
      return {ok: true, status: 200, ...formatResponseBody({count: 0, results: []})}
    } else if (req.url.endsWith(
      '/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=5fb2991a-f151-40f5-a05f-10f630acf178&page=1'
    ) || req.url.endsWith(
      '/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=staging&page=1'
    )) {
      return {ok: true, status: 200, ...formatResponseBody({
        count: 5,
        results: [
          {name: 'CTTEST_NOT_A_SECRET', secret: false, values: [{value: 'not_a_secret_override'}]},
          {name: 'CTTEST_TOTALLY_A_SECRET', secret: true, values: [{value: 'totally_a_secret_override'}]},
          {name: 'CTTEST_HAS_NO_OVERRIDE', secret: false, values: [{value: 'has_no_override_default'}]},
          {name: 'cttest.not.posix', secret: false, values: [{value: 'not.posix.override'}]},
          {name: 'CTTEST_HAS_NO_VALUE', secret: false, values: []}
        ]
      })}
    } else if (req.url.endsWith(
      '/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=default&page=1&page_size=3'
    ) || req.url.endsWith(
      '/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=default&page=1'
    ) || req.url.endsWith(
      '/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=1ec45f01-02d2-4046-a9d3-404be4327602&page=1'
    )) {
      return {ok: true, status: 200, ...formatResponseBody({
        count: 5,
        results: [
          {name: 'CTTEST_NOT_A_SECRET', secret: false, values: [{value: 'not_a_secret_default'}]},
          {name: 'CTTEST_TOTALLY_A_SECRET', secret: true, values: [{value: 'totally_a_secret_default'}]},
          {name: 'CTTEST_HAS_NO_OVERRIDE', secret: false, values: [{value: 'has_no_override_default'}]},
          {name: 'cttest.not.posix', secret: false, values: [{value: 'not.posix.default'}]},
          {name: 'CTTEST_HAS_NO_VALUE', secret: false, values: []}
        ]
      })}
    } else if (req.url.endsWith(
      '/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=5fb2991a-f151-40f5-a05f-10f630acf178&tag=tag-one'
    ) || req.url.endsWith(
      '/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=staging&tag=tag-one&page=1'
    )) {
      return {ok: true, status: 200, ...formatResponseBody({
        count: 5,
        results: [
          {name: 'CTTEST_NOT_A_SECRET', secret: false, values: [{value: 'not_a_secret_override_tag_one'}]},
          {name: 'CTTEST_TOTALLY_A_SECRET', secret: true, values: [{value: 'totally_a_secret_override'}]},
          {name: 'CTTEST_HAS_NO_OVERRIDE', secret: false, values: [{value: 'has_no_override_default'}]},
          {name: 'cttest.not.posix', secret: false, values: [{value: 'not.posix.override'}]},
          {name: 'CTTEST_HAS_NO_VALUE', secret: false, values: []}
        ]
      })}
    } else if (req.url.endsWith(
      '/api/v1/projects/93712239-500a-456e-b1c6-6d8290912067/parameters/?environment=1ec45f01-02d2-4046-a9d3-404be4327602&page=1'
    ) || req.url.endsWith(
      '/api/v1/projects/93712239-500a-456e-b1c6-6d8290912067/parameters/?environment=default&page=1'
    )) {
      return {ok: true, status: 200, ...formatResponseBody({count: 0, results: []})}
    } else if (req.url.endsWith('/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/')) {
      return {ok: true, status: 200, ...formatResponseBody({id: '46266d6b-e430-42e2-a5fb-e7187ef3611c', name: 'cloudtruth/configure-action'})}
    } else if (req.url.endsWith('/api/v1/projects/93712239-500a-456e-b1c6-6d8290912067/')) {
      return {ok: true, status: 200, ...formatResponseBody({id: '93712239-500a-456e-b1c6-6d8290912067', name: 'empty'})}
    } else if (req.url.endsWith('/api/v1/projects/')) {
      return {ok: true, status: 200, ...formatResponseBody({
        count: 2,
        results: [
          {id: '46266d6b-e430-42e2-a5fb-e7187ef3611c', name: 'cloudtruth/configure-action'},
          {id: '93712239-500a-456e-b1c6-6d8290912067', name: 'empty'}
        ]
      })
    }}
    if (req.url.endsWith('/api/v1/projects/46266d6b-e430-42e2-a5fb-e7187ef3611c/parameters/?environment=default&tag=not_a_real_tag_name&page=1')) {
      return {ok: false, status: 404, ...formatResponseBody({detail: 'Tag `not_a_real_tag_name` could not be found in environment `default`.'})}
    }
    return {ok: false, status: 404, ...formatResponseBody({detail: 'Not found.'})}
})}
