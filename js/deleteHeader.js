/**
 * Locket Gold VIP - Delete RevenueCat & Firebase Cache Headers
 * Author: hungw. (https://github.com/hung2705/OhYeah275)
 */

const headers = (typeof $request !== "undefined" && $request && $request.headers) ? Object.assign({}, $request.headers) : {};

for (const key of Object.keys(headers)) {
  const lower = key.toLowerCase();
  if (lower === "x-revenuecat-etag" || lower === "if-none-match" || lower === "if-modified-since") {
    delete headers[key];
  }
}

$done({ headers });
