declare module 'express-openid-connect' {
    import { RequestHandler } from 'express';
  
    interface AuthConfig {
      authRequired?: boolean;
      auth0Logout?: boolean;
      secret: string;
      baseURL: string;
      clientID: string;
      issuerBaseURL: string;
    }
  
    function auth(config: AuthConfig): RequestHandler;
  
    export { auth };
  }