export const environment = {
  production: false,
  useHash: false,
  auth_config: {
    client_id: '2ac5b8a5-9795-4c8c-a09b-fb3c32e93cc7',
    server_host: 'https://idp.bexio.com',
    redirect_url: 'http://localhost:8100/auth/callback',
    response_type: 'token',
    end_session_redirect_url: 'http://localhost:8100/auth/end-session',
    scopes: 'openid profile email monitoring_edit project_show offline_access',
    pkce: false
  }
};