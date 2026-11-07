/**
 * Locket Gold VIP - Profile Badge Keeper
 * Author: hungw. (https://github.com/hung2705/OhYeah275)
 * Chỉ cấp huy hiệu Locket Gold cho chính chủ máy (tránh biến toàn bộ bạn bè thành Gold).
 */

let myUid = null;
try {
  if (typeof $persistentStore !== "undefined") {
    myUid = $persistentStore.read("hungw_locket_uid");
  }
} catch (e) {
  myUid = null;
}

function applyGoldBadge(target) {
  if (!target || typeof target !== "object") return;
  // Nếu đã xác định được UID của chủ máy và đối tượng có UID khác -> BỎ QUA (không cấp cho bạn bè)
  if (myUid && target.uid && target.uid !== myUid) {
    return;
  }
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
  // Response mode (chỉ xử lý thông tin cá nhân của chủ tài khoản)
  let reqUrl = (typeof $request !== "undefined" && $request && $request.url) ? $request.url : "";
  
  // Tuyệt đối không can thiệp các API danh sách bạn bè, tìm bạn, hoặc bảng tin moments
  if (reqUrl.includes("fetchFriends") || reqUrl.includes("getFriends") || reqUrl.includes("syncFriends") || reqUrl.includes("moments")) {
    $done({});
  } else {
    try {
      let bodyObj = JSON.parse($response.body);
      if (bodyObj && typeof bodyObj === "object") {
        if (bodyObj.user) {
          applyGoldBadge(bodyObj.user);
        } else if (bodyObj.data && !Array.isArray(bodyObj.data)) {
          applyGoldBadge(bodyObj.data);
        } else if (bodyObj.result && !Array.isArray(bodyObj.result)) {
          applyGoldBadge(bodyObj.result);
        } else if (bodyObj.uid && (!myUid || bodyObj.uid === myUid)) {
          applyGoldBadge(bodyObj);
        }
        $done({ body: JSON.stringify(bodyObj) });
      } else {
        $done({});
      }
    } catch (e) {
      $done({});
    }
  }
}
