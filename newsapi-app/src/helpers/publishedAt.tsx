export function reformatPublishedAt(inputDate: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
    new Date(inputDate)
  );
  const noPukul = formattedDate.replace("pukul", "").trim();

  return noPukul;
}
