import { Injectable } from '@angular/core';
import { AppAuthError, AuthorizationServiceConfiguration, BasicQueryStringUtils, FetchRequestor, JQueryRequestor, QueryStringUtils, Requestor, RevokeTokenRequest, StorageBackend, TokenError, TokenErrorJson, TokenRequest, TokenRequestHandler, TokenResponse, TokenResponseJson } from '@openid/appauth';
import { AuthService, Browser } from 'ionic-appauth';

@Injectable({
  providedIn: 'root'
})

export class CustomBaseTokenRequestHandler implements TokenRequestHandler {
  public readonly utils: QueryStringUtils = new BasicQueryStringUtils()

  constructor(
    public readonly requestor: Requestor = new JQueryRequestor(),
  ) { }

  private isTokenResponse(response: TokenResponseJson |
    TokenErrorJson): response is TokenResponseJson {
    return (response as TokenErrorJson).error === undefined;
  }

  performRevokeTokenRequest(
    configuration: AuthorizationServiceConfiguration,
    request: RevokeTokenRequest): Promise<boolean> {
    let revokeTokenResponse = this.requestor.xhr<boolean>({
      url: configuration.revocationEndpoint,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: this.utils.stringify(request.toStringMap())
    });

    return revokeTokenResponse.then(response => {
      return true;
    });
  }

  performTokenRequest(configuration: AuthorizationServiceConfiguration, request: TokenRequest):
    Promise<TokenResponse> {
    let data = this.utils.stringify(request.toStringMap()) + '&client_secret=AKwyBsI3aYWz2wAiKilVl8c6Xm4P1iV7sD-jeucXte2L5GmK6OwISbt3kSNw7PySr2_5KLkPkiJMlaI9_SILIC0'
    let tokenResponse = this.requestor.xhr<TokenResponseJson | TokenErrorJson>({
      url: configuration.tokenEndpoint,
      method: 'POST',
      dataType: 'json',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: data
    });

    return tokenResponse.then(response => {
      if (this.isTokenResponse(response)) {
        return new TokenResponse(response);
      } else {
        return Promise.reject<TokenResponse>(
          new AppAuthError(response.error, new TokenError(response)));
      }
    });
  }
}

export class CustomAuthService extends AuthService {
  constructor(browser?: Browser, storage?: StorageBackend, requestor?: Requestor) {
    super(browser, storage, requestor);
    this.tokenHandler = new CustomBaseTokenRequestHandler(new FetchRequestor())
  }
}
