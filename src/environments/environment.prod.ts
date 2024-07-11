export const environment = {
  production: true,
  useHash: false,
  auth_config: {
    client_id: '2ac5b8a5-9795-4c8c-a09b-fb3c32e93cc7',
    server_host: 'https://idp.bexio.com',
    redirect_url: 'https://app.bextrack.com/auth/callback',
    redirect_url_native: 'xyz.lukeisontheroad.bexio://callback',
    response_type: 'token',
    end_session_redirect_url: 'https://app.bextrack.com/auth/end-session',
    end_session_redirect_url_native: 'xyz.lukeisontheroad.bexio://endsession',
    scopes: 'openid profile email monitoring_edit project_show offline_access', // contact_show
    pkce: false
  }
};