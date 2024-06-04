export const feedDateFormatter = (dateString: string): string => {
  const date = new Date(dateString);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[date.getUTCDay()];

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM

  return `${dayName} at ${formattedHours}:${formattedMinutes} ${period}`;
};
