import { formatPhone, telHref, smsHref } from "./phone";

/** The one place the number lives. Digits only — everything else is derived. */
const PHONE_DIGITS = "9737435282";

/**
 * The text branch matters here as much as the call branch: this room takes
 * bookings by phone only, and plenty of people would rather ask about tonight
 * from a desk they can't talk at. Body written for THIS spa — unhurried, and it
 * asks the two things the front desk needs to know.
 */
export const SMS_BODY =
  "Hi Top Health Spa — is there a table open today? Let me know what times you have.";

export const site = {
  phone: formatPhone(PHONE_DIGITS),
  phoneHref: telHref(PHONE_DIGITS),
  smsHref: smsHref(PHONE_DIGITS, SMS_BODY),
  smsBody: SMS_BODY,
  address: "28 Washington St, Bloomfield, NJ 07003",
};
