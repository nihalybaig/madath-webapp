// utils/hijriUtils.ts

/**
 * Converts a Gregorian date to a Hijri date in the format '14 Muharram, 1446'.
 * @param date - The Gregorian date to be converted.
 * @returns The Hijri date as a string.
 */
export function getHijriDate(date) {
  const gregorianYear = date.getFullYear();
  const gregorianMonth = date.getMonth() + 1; // Months are zero-based
  const gregorianDay = date.getDate();

  // Algorithm to convert Gregorian date to Hijri date
  // Approximate Hijri year calculation
  const daysSinceEpoch = Math.floor(
    (Date.UTC(gregorianYear, gregorianMonth - 1, gregorianDay) -
      Date.UTC(622, 6, 16)) /
      (1000 * 60 * 60 * 24)
  );
  const hijriYear = Math.floor(daysSinceEpoch / 354.367) + 1;
  const hijriMonth = Math.floor((daysSinceEpoch % 354.367) / 29.530588) + 1;
  const hijriDay = Math.floor((daysSinceEpoch % 354.367) % 29.530588);

  // Hijri month names
  const hijriMonthNames = [
    "Muharram",
    "Safar",
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    "Jumada al-Awwal",
    "Jumada al-Thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qi'dah",
    "Dhu al-Hijjah",
  ];

  return `${Math.round(hijriDay)} ${
    hijriMonthNames[hijriMonth - 1]
  }, ${hijriYear}`;
}
