export async function apiClient<T>(route: string): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${route}`
  );

  if (!response.ok) {
    throw new Error(`API error : ${response.status}`);
  }

  return response.json();
}