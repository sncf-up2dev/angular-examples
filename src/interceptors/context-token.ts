import { HttpContextToken } from "@angular/common/http";

export const IS_LOGGING_ENABLED = new HttpContextToken<boolean>(() => false)
export const COUNT = new HttpContextToken<number>(() => 0)