import { API_BASE_URL } from "../../../navigation/constants";
import { CreateDraftParam, Draft, IProject, Message, ProjectPositions } from "../../../types";

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
    `${API_BASE_URL}/project/update-position/${project_id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ position, trade_id }),
      headers: {
        "Content-type": "application/json",
      },
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

export const acceptProject = async (
  project_id: string,
  executor_id: string,
  trades: string[]
): Promise<[object | null, IProject | null]> => {
  const res = await fetch(`${API_BASE_URL}/project/accept`, {
    method: "PATCH",
    body: JSON.stringify({ project_id, executor_id, trades }),
    headers: {
      "Content-type": "application/json",
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

export const rejectProject = async (
  project_id: string,
  executor_id: string,
  trades: string[]
): Promise<[object | null, IProject | null]> => {
  const res = await fetch(`${API_BASE_URL}/project/reject`, {
    method: "PATCH",
    body: JSON.stringify({ project_id, executor_id, trades }),
    headers: {
      "Content-type": "application/json",
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

export const createNewDraft = async (
  draft: CreateDraftParam
): Promise<[object | null, Draft | null]> => {
  const res = await fetch(
    `${API_BASE_URL}/draft/create`,
    {
      method: "POST",
      body: JSON.stringify({ payload: draft }),
      headers: {
        "Content-type": "application/json",
      },
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

export const uploadPositionFile = async (
  project_id: string,
  position: string,
  trade_id: string,
  file: File
): Promise<
  [
    object | null,
    {
      message: string;
      publicUrl: string;
    } | null
  ]
> => {
  const fd = new FormData();
  fd.append("project-document", file);
  const res = await fetch(
    `${API_BASE_URL}/project/position/${project_id}/${trade_id}/${position}`,
    {
      method: "POST",
      body: fd,
      headers: {
        "Content-type": "application/json",
      },
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

export const updatePositionsByTrade = async (
  project_id: string,
  trade: string,
  status: string
): Promise<[object | null, IProject | null]> => {
  const res = await fetch(
    `${API_BASE_URL}/project/postitions/${project_id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ trade, status }),
      headers: {
        "Content-type": "application/json",
      },
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


export const addNewAddendum = async (
  project_id: string,
  trade_id: string,
  positions: ProjectPositions[]
): Promise<[object | null, IProject | null]> => {
  const res = await fetch(
    `${API_BASE_URL}/project/extra/${project_id}`,
    {
      method: "POST",
      body: JSON.stringify({ positions, trade_id }),
      headers: {
        "Content-type": "application/json",
      },
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

export const updateProjectExtraPosition = async (
  project_id: string,
  position: ProjectPositions,
  trade_id: string
) => {
  const res = await fetch(
    `${API_BASE_URL}/project/update-extra/${project_id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ position, trade_id }),
      headers: {
        "Content-type": "application/json",
      },
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

export const addMessage = async (
 payload: Message
): Promise<[object | null, Message | null]> => {
  const res = await fetch(
    `${API_BASE_URL}/message/create`,
    {
      method: "POST",
      body: JSON.stringify({ payload }),
      headers: {
        "Content-type": "application/json",
      },
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