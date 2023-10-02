import { API_BASE_URL } from "../../../navigation/constants";

/* eslint-disable @typescript-eslint/ban-ts-comment */
export async function getFile(): Promise<[null|Error, null|File]> {
  const pickerOpts = {
    types: [
      {
        description: 'Images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };
  try {
    // @ts-ignore
    const fileHandle = await window.showOpenFilePicker(pickerOpts);
    const file = await fileHandle[0].getFile();
    return [null, file];
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