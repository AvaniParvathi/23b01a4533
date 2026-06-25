import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export function NotificationCard({ notification }) {
  if (!notification) return null;

  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">
            {notification.Message}
          </Typography>

          <Chip
            label={notification.Type}
            color={
              notification.Type === "Placement"
                ? "success"
                : notification.Type === "Result"
                ? "warning"
                : "primary"
            }
            sx={{ width: "fit-content" }}
          />

          <Typography variant="body2" color="text.secondary">
            {notification.Timestamp}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}