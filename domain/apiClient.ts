export async function apiClient<T>(route: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`http://localhost:3000/api/${route}`, options);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}