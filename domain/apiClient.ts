const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL!

export async function apiClient<T>(route: string, options?: RequestInit): Promise<T> {
  const response = await fetch(NEXT_PUBLIC_API_URL + `/${route}`, options);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json();
}