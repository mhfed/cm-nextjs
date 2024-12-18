const requiredServerEnvs = ['API_URL', 'JWT_SECRET'] as const;
const requiredClientEnvs = ['NEXT_PUBLIC_API_URL'] as const;

export function validateEnv() {
  for (const env of requiredServerEnvs) {
    if (!process.env[env]) {
      throw new Error(`Missing required server environment variable: ${env}`);
    }
  }

  for (const env of requiredClientEnvs) {
    if (!process.env[env]) {
      throw new Error(`Missing required client environment variable: ${env}`);
    }
  }
}
