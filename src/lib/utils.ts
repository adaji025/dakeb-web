export function decodeJWT(token: string) {
    try {
      const [header, payload] = token.split('.');
  
      const decodedHeader = atob(header);
      const decodedPayload = atob(payload);
  
      const parsedHeader = JSON.parse(decodedHeader);
      const parsedPayload = JSON.parse(decodedPayload);
  
      return { header: parsedHeader, payload: parsedPayload };
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }
