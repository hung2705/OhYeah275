/**
 * Locket Gold VIP - Profile Badge Keeper
 * Author: hungw. (https://github.com/hung2705/OhYeah275)
 */

function applyGoldBadge(target) {
  if (!target || typeof target !== "object") return;
  target.badge = "locket_gold";
  target.badge_tier = "gold";
  target.is_gold = true;
  target.show_badge = true;
}

if (typeof $response === "undefined" || !$response) {
  // Request mode (e.g. /changeProfileInfo)
  let reqUrl = (typeof $request !== "undefined" && $request && $request.url) ? $request.url : "";
  if (reqUrl.includes("changeProfileInfo")) {
    const mockBody = {
      data: { badge: "locket_gold", badge_tier: "gold", is_gold: true, success: true },
      result: { badge: "locket_gold", badge_tier: "gold", is_gold: true, success: true }
    };
    $done({
      response: {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(mockBody)
      }
    });
  } else {
    $done({});
  }
} else {
  // Response mode (e.g. api.locketcamera.com/*)
  try {
    let bodyObj = JSON.parse($response.body);
    if (bodyObj && typeof bodyObj === "object") {
      if (bodyObj.user) applyGoldBadge(bodyObj.user);
      if (bodyObj.data) applyGoldBadge(bodyObj.data);
      if (bodyObj.result) applyGoldBadge(bodyObj.result);
      if (bodyObj.badge !== undefined || bodyObj.uid !== undefined) applyGoldBadge(bodyObj);
      $done({ body: JSON.stringify(bodyObj) });
    } else {
      $done({});
    }
  } catch (e) {
    $done({});
  }
}
