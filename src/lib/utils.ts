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
  
export function getFirstLetterOfFullName(fullName: string) {
  const words = fullName.trim().split(' ');

  if (words.length === 0) {
    return ''; // Handle empty input
  }

  const initials = words.map(word => word[0].toUpperCase());

  return initials.join('');
}
