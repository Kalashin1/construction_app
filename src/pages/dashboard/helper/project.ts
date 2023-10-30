import { API_BASE_URL } from "../../../navigation/constants";
import { IProject, createProjectParam } from "../../../types";

export const createProject = async (param: createProjectParam) => {
  const res = await fetch(`${API_BASE_URL}/project/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(param),
  });

  if (res.ok) {
    const payload = await res.json()
    return [null, payload]
  } else {
    const error = await res.json()
    return [error, null]
  }
}

export const getAllProjects = async () => {
  const res = await fetch(`${API_BASE_URL}/projects`)

  if (res.ok) {
    const payload = await res.json()
    return [null, payload]
  } else {
    const error = await res.json()
    return [error, null]
  }
}
export const getAllContractorProjects = async (contractor_id: string) => {
  const res = await fetch(`${API_BASE_URL}/projects/contractor/${contractor_id}`)

  if (res.ok) {
    const payload = await res.json()
    return [null, payload]
  } else {
    const error = await res.json()
    return [error, null]
  }
}
export const getAllExecutorProjects = async (executor_id: string) => {
  const res = await fetch(`${API_BASE_URL}/projects/executor/${executor_id}`);

  if (res.ok) {
    const payload = await res.json()
    return [null, payload]
  } else {
    const error = await res.json()
    return [error, null]
  }
}

export const getProject = async (project_id: string): Promise<[object|null, IProject|null]> => {
  const res = await fetch(`${API_BASE_URL}/project/id/${project_id}`);
  if (res.ok) {
    const payload = await res.json()
    return [null, payload]
  } else {
    const error = await res.json()
    return [error, null]
  }
}