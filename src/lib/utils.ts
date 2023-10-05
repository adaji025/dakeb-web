export function getFirstLetterOfFullName(fullName: string) {
  const words = fullName && fullName.trim().split(" ") || [];

  if (words.length === 0) {
    return ""; // Handle empty input
  }

  const initials = words.map((word) => word[0].toUpperCase());

  return initials.join("");
}
