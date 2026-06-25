import axios from "axios";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhdmFuaXBhcnZhdGhpNDRAZ21haWwuY29tIiwiZXhwIjoxNzgyMzc4ODE3LCJpYXQiOjE3ODIzNzc5MTcsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkZjQzMTZkMC04MDdhLTQxOTAtODNiNi01YmEzNDBjZmIwOWUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJnb3R0dW11a2thbGEgYXZhbmkgcGFydmF0aGkiLCJzdWIiOiJjMTE3NTlkNS05NTI3LTRiMjEtYWVkMi03MWI3NzQ2YWE3MGMifSwiZW1haWwiOiJhdmFuaXBhcnZhdGhpNDRAZ21haWwuY29tIiwibmFtZSI6ImdvdHR1bXVra2FsYSBhdmFuaSBwYXJ2YXRoaSIsInJvbGxObyI6IjIzYjAxYTQ1MzMiLCJhY2Nlc3NDb2RlIjoiYWhYanZwIiwiY2xpZW50SUQiOiJjMTE3NTlkNS05NTI3LTRiMjEtYWVkMi03MWI3NzQ2YWE3MGMiLCJjbGllbnRTZWNyZXQiOiJqY05XUU5Dakp0aG50ekFXIn0.IhPJSHDDQysCMo4T6Kda6-oc50vzxCzEmdHPC0VxyFk";

export async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Logging failed:", error.response?.data || error.message);
  }
}