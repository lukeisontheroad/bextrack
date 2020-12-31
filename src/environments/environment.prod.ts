export const environment = {
  production: false,
  useHash: true,
  auth_config: {
    client_id: '2ac5b8a5-9795-4c8c-a09b-fb3c32e93cc7',
    server_host: 'https://idp.bexio.com',
    redirect_url: 'xyz.lukeisontheroad.bexio://callback',
    response_type: 'token',
    end_session_redirect_url: 'xyz.lukeisontheroad.bexio://endsession',
    scopes: 'openid profile email monitoring_edit project_show offline_access', // contact_show
    pkce: false
  }
};