type environmentType = {
  readonly development: string;
  readonly testing: string;
  readonly production: string;
};

const envType: environmentType = {
  development: 'http://localhost:3000/api-dev/v1',
  testing: 'http://localhost:3000/api-test/v1',
  production: 'http://localhost:3000/api-prod/v1',
};

// Update the base_url depending on the env type:
export const base_url = envType.development;
