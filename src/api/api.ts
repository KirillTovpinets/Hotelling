export const jsonApi = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  async get(url: string, tags: string[] = []) {
    const res = await fetch(this.baseUrl + '/' + url, { next: { tags } });
    return await res.json();
  },

  async post(url: string, data: any) {
    const res = await fetch(this.baseUrl + '/' + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  },
};

export const nextApi = {
  baseUrl: '/api',
  async get(url: string) {
    const res = await fetch(this.baseUrl + '/' + url);
    return await res.json();
  },

  async post(url: string, data: any) {
    const res = await fetch(this.baseUrl + '/' + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  },
};
