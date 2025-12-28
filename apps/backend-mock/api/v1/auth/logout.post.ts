import { eventHandler } from 'h3';
import { clearRefreshTokenCookie } from '~/utils/cookie-utils';
import { verifyAccessToken } from '~/utils/jwt-utils';
import { unAuthorizedResponse, useResponseSuccess } from '~/utils/response';

export default eventHandler((event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  
  clearRefreshTokenCookie(event);
  
  return useResponseSuccess(null);
});