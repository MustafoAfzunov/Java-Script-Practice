class HttpClient {
    async get(url) {
      const response = await fetch(url);
      return response.json();
    }
  
    async post(url, data) {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    }
  
    async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    }
  
    async delete(url) {
      const response = await fetch(url, {
        method: 'DELETE'
      });
      return response.json();
    }
  }
  
  // Example usage:
  const client = new HttpClient();
  client.get('https://api.example.com/data').then(data => console.log(data));
  