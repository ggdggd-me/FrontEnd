import { Timestamp } from "firebase/firestore";

export default function getDateFromTimeStamp(date: Timestamp) {
  const timestamp = date.toDate();
  const year = timestamp.getFullYear();
  const month = ("0" + (timestamp.getMonth() + 1)).slice(-2);
  const day = ("0" + timestamp.getDate()).slice(-2);

  return `${year}.${month}.${day}`;
}
