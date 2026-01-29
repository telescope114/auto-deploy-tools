import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

const DEFAULT_LOCALE = "zh-cn";

type FormateType =
  | "YYYY/MM/DD"
  | "YYYY/MM/DD HH:mm"
  | "YYYY/MM/DD HH:mm:ss"
  | "YYYY-MM-DD"
  | "YYYY-MM-DD HH:mm"
  | "YYYY-MM-DD HH:mm:ss"
  | "YYYY年MM月DD日(dd)"
  | "YYYY年MM月DD日";

export const formatDate = (
  date: string | Date,
  formate: FormateType = "YYYY/MM/DD",
  locale: string = DEFAULT_LOCALE,
) => {
  if (date === "") {
    return "";
  }

  return dayjs(date).locale(locale).format(formate);
};

/*
 * 1分钟以内：just now
 * 60分钟（1小时）以内：xx minutes ago
 * 24小时（１天）以内：xx hours ago
 * 超过1天：YYYY/MM/DD HH:MM（例：2024/03/30 12:45
 *
 */
export const getTimeDiffLabel = (date?: string | Date): string => {
  if (!date || (typeof date === "string" && !date.trim())) {
    return "";
  }

  const now = dayjs();
  const target = dayjs(date);
  const diff = now.diff(target, "minute");

  if (diff <= 1) {
    return "just now";
  }
  if (diff <= 60) {
    return `${diff} minutes ago`;
  }
  if (diff < 24 * 60) {
    return `${Math.floor(diff / 60)}時間前`;
  }
  return formatDate(date, "YYYY/MM/DD HH:mm");
};
