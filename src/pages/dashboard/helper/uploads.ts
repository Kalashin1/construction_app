/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_BASE_URL } from "../../../navigation/constants";

/* eslint-disable @typescript-eslint/ban-ts-comment */
export async function getFile(accept?: {
  [key: string]: string[],
}, 
description?: string, 
multiple = false
): Promise<[null|Error, null|File[]]> {
  if (!accept) {
    accept = {
      'image/*':  ['.png', '.gif', '.jpeg', '.jpg'],
    }
  }
  const pickerOpts = {
    types: [
      {
        description: description ?? 'Images',
        accept: {
          ...accept
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple,
  };
  try {
    // @ts-ignore
    const fileHandle = await window.showOpenFilePicker(pickerOpts);
    const files = await Promise.all(fileHandle.map(async (fileHandle: any) => await fileHandle.getFile()))
    return [null, files];
  } catch (error) {
    return [error as Error, null];
  }
}

export const uploadLogoURL = async (
  owner_id: string, 
  logo_type: string,
  file: File
) => {
  const formData = new FormData();
  formData.append('logo', file);
  const res = await fetch(`${API_BASE_URL}/logo_url/${owner_id}/${logo_type}`, {
    method: 'POST',
    body: formData
  })
  if (res.ok) {
    const payload = await res.json();
    return [null, payload]
  } else {
    const error = await res.json();
    return [error, null]
  }
}

export const uploadProfilePhoto = async (
  owner_id: string, 
  file: File
) => {
  const formData = new FormData();
  formData.append('image', file);
  const res = await fetch(`${API_BASE_URL}/profile-photo/${owner_id}`, {
    method: 'POST',
    body: formData
  })
  if (res.ok) {
    const payload = await res.json();
    return [null, payload]
  } else {
    const error = await res.json();
    return [error, null]
  }
}

export const uploadProject = async (
  project_id: string, 
  file: File
) => {
  const formData = new FormData();
  formData.append('project', file);
  const res = await fetch(`${API_BASE_URL}/project/upload/${project_id}`, {
    method: 'POST',
    body: formData
  })
  if (res.ok) {
    const payload = await res.json();
    return [null, payload]
  } else {
    const error = await res.json();
    return [error, null]
  }
}

export const uploadDocument = async (
  owner_id: string, 
  file: File,
  documentType:string
) => {
  const formData = new FormData();
  formData.append('document', file);
  const res = await fetch(`${API_BASE_URL}/document/${owner_id}/${documentType}`, {
    method: 'POST',
    body: formData
  })
  if (res.ok) {
    const payload = await res.json();
    return [null, payload]
  } else {
    const error = await res.json();
    return [error, null]
  }
}