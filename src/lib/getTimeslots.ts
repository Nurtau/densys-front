import { type DateRange } from "@app/api";

export const getTimeslot = (start: string, end: string) => {
  const startHour = +start.split(":")[0];
  const endHour = +end.split(":")[0];

  const timeslots: DateRange[] = [];

  for (let h = startHour; h < endHour; h++) {
    timeslots.push({ start_datetime: `${h}:00`, end_datetime: `${h}: 30` });
    timeslots.push({ start_datetime: `${h}:30`, end_datetime: `${h}: 00` });
  }

  return timeslots;
};
