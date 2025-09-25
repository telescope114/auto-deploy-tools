export interface HealthStatus {
  status: string;
}

export function getHealthStatus(): HealthStatus {
  return { status: "ok" };
}
