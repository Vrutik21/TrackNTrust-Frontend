export function formatDateTime(inputDate) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    hour12: true,
  };

  const formattedDateTime = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );

  return formattedDateTime;
}

export function trimStatus(str) {
  return str?.replace(/_/g, " ").toUpperCase();
}
