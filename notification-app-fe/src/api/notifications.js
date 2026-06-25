import axios from "axios";

const API_URL = "http://4.224.186.213/evaluation-service/notifications";

// Replace with your actual token
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN_HERE";

export async function fetchNotifications(
  page = 1,
  limit = 10,
  notificationType = "All"
) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        page,
        limit,
        ...(notificationType !== "All" && {
          notification_type: notificationType,
        }),
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch notifications:", error);
    throw error;
  }
}