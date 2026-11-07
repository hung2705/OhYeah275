/**
 * Locket Gold VIP - RevenueCat Subscription Unlock
 * Author: hungw. (https://github.com/hung2705/OhYeah275)
 */

const purchaseDate = "2023-10-29T08:30:00Z";
const expiresDate = "2099-12-31T23:59:59Z";

// Tự động trích xuất và ghi nhớ UID của chính chủ máy để chỉ cấp huy hiệu cho chủ máy
try {
  if (typeof $request !== "undefined" && $request && $request.url) {
    const match = $request.url.match(/subscribers\/([^/?]+)/);
    if (match && match[1] && typeof $persistentStore !== "undefined") {
      $persistentStore.write(match[1], "hungw_locket_uid");
    }
  }
} catch (err) {}


let obj = {};
try {
  if (typeof $response !== "undefined" && $response && $response.body) {
    obj = JSON.parse($response.body);
  }
} catch (e) {
  obj = {};
}

obj.Attention = "Locket Gold VIP - Kích hoạt thành công bởi hungw.!";

const subscriptionData = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    amount: 399000,
    currency: "VND"
  },
  expires_date: expiresDate,
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: purchaseDate,
  purchase_date: purchaseDate,
  store: "app_store",
  store_transaction_id: "2000001108724193"
};

const entitlementData = {
  grace_period_expires_date: null,
  purchase_date: purchaseDate,
  original_purchase_date: purchaseDate,
  product_identifier: "locket_1600_1y",
  expires_date: expiresDate,
  ownership_type: "PURCHASED",
  store: "app_store"
};

obj.subscriber = obj.subscriber || {};
obj.subscriber.first_seen = purchaseDate;
obj.subscriber.original_purchase_date = purchaseDate;
obj.subscriber.management_url = "https://apps.apple.com/account/subscriptions";
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

obj.subscriber.subscriptions["locket_1600_1y"] = subscriptionData;
obj.subscriber.entitlements["Gold"] = entitlementData;
obj.subscriber.entitlements["pro"] = entitlementData;
obj.subscriber.entitlements["vip"] = entitlementData;

$done({
  body: JSON.stringify(obj)
});
