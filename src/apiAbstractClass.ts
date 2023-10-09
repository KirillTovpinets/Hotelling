export class ApiProvider {
  private baseUrl: string;

  async get(url: string, tags: string[] = []) {
    const res = await fetch(this.baseUrl + '/' + url, { next: { tags } });
    return await res.json();
  }

  async post(url: string, data: any) {
    const res = await fetch(this.baseUrl + '/' + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  }

  async put(url: string, data: any) {
    const res = await fetch(this.baseUrl + '/' + url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  }

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}
