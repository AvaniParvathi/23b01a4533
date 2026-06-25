import { useEffect, useState } from "react";
import { fetchNotifications } from "../apis/notifications";

export function useNotifications(page = 1, limit = 10, filter = "All") {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchNotifications(page, limit, filter);

        setNotifications(data.notifications || []);
        setTotal(data.total || 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [page, limit, filter]);

  const totalPages = Math.ceil(total / limit);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}