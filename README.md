# Simple prototype of API server

- For launching

  1. Set local environment variable `env.TOKEN_SECRET` for verifying JWT token
  2. Generate any JWT token with env.TOKEN_SECRET and use it as Authorization header
  3. Run command `yarn install, yarn start`
  4. Api endpoint `http://localhost:3001/api/`

- API schema definition docs/apiDefinition.d.ts
- Can be deployed as a sdandalone service or lambda function with according adjustments
- DB part emulated by functions with mocked data for demo purposes
