import { API_BASE_URL } from "../../../navigation/constants";
import { ProjectPositions } from "../../../types";

export const assignProjectToExecutor = async (
  project_id: string,
  executor_id: string,
  trades: string[],
  contractor_id: string
) => {
  const res = await fetch(`${API_BASE_URL}/project/executor/${project_id}`, {
    body: JSON.stringify({ executor_id, trades, contractor_id }),
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json();
    return [error, null];
  }
};

export const updateProjectPosition = async (
  project_id: string,
  position: ProjectPositions,
  trade_id: string
) => {
  const res = await fetch(
    `${API_BASE_URL}/project/update-position/:${project_id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ position, trade_id }),
    }
  );

  if (res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json();
    return [error, null];
  }
};
