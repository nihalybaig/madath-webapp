import moment from "moment";

/**
 * Calculates the remaining time for the next prayer
 *
 * @param {array} timesArr the list of prayer times
 * @returns {[string, number]} the remaining time in string format, the index of the next prayer in the prayer list
 */
export default function useNextPrayer(timesArr) {
  // Get current time using moment.js
  const currentTime = moment();

  // Get the date of the prayer
  const getTime = (time) => {
    const [hours, minutes] = time.split(":");
    return moment().set({
      hour: hours,
      minute: minutes,
      second: 0,
      millisecond: 0,
    });
  };

  const prayerTimes = timesArr.map(getTime);

  // Get the remaining time for each prayer
  const timeLeft = prayerTimes.map((time) => time.diff(currentTime));

  // Get the remaining prayers for today
  const remainingPrayers = timeLeft.filter((time) => time > 0);

  // Get the remaining time for the next prayer
  let remainingTime =
    remainingPrayers.length > 0
      ? Math.min(...remainingPrayers)
      : moment.duration(1, "days").asMilliseconds() -
        currentTime.diff(prayerTimes[0]);

  // Get next prayer index
  const nextPrayer =
    timeLeft.indexOf(remainingTime) !== -1
      ? timeLeft.indexOf(remainingTime)
      : 0;

  // Format remaining time using moment.js
  const formattedRemainingTime = moment.utc(remainingTime).format("HH:mm:ss");

  return [formattedRemainingTime, nextPrayer];
}
