import { OAuth2Client } from 'google-auth-library';
import { withIronSession } from 'iron-session';
import { oauth } from '../controllers/user/userController.js';
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  /**
   * To get access_token and refresh_token in server side,
   * the data for redirect_uri should be postmessage.
   * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
   */
  'postmessage'
);

export const getProfileInfo = async (code) => {
  const r = await client.getToken(code);
  const idToken = r.tokens.id_token;

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  return payload;
};

export default withIronSession(oauth, {
  password: process.env.SECRET_KEY,
    cookieName: 'auth-session',
    cookieOptions:{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    }
});