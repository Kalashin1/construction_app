import { API_BASE_URL } from "../../../navigation/constants";
import { Product } from "../../../types";

type _Error = {
  message: string
}

export const createProduct = async (product: Product): Promise<[null | _Error, Product|null]> => {
  const res = await fetch(`${API_BASE_URL}/product/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ payload: product })
  });

  if (res.ok) {
    const data = await res.json();
    return [null, data]
  } else {
    const error = await res.json();
    return [error, null];
  }
}

export const updateProductImage = async (shop_id: string, product_id: string, images: File[]) => {
  const fd = new FormData();
  images.forEach((image) => fd.append('product',  image))
  const res = await fetch(`${API_BASE_URL}/product/image/${shop_id}/${product_id}`, {
    method: 'PATCH',
    body: fd,
  })

  if (res.ok) {
    const data = await res.json();
    return [null, data]
  } else {
    const error = await res.json();
    return [error, null]
  }
}