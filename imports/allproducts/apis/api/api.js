import { BASE_URL } from "@/config";

export const handleRegisterApi = async (signUpData) => {
  const resp = await fetch(`${BASE_URL}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  });
  return resp;
};

export const handleLoginApi = async (loginData) => {
  const resp = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  return resp;
};

export const handleCategoryApi = async () => {
  const resp = await fetch(`${BASE_URL}/category/categories`, {
    method: "GET",
  });
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};

export const handleCartApi = async (token) => {
  const resp = await fetch(`${BASE_URL}/cart/carts`, {
    method: "GET",
    headers: { Authorization: token },
  });
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};

export const handleProductApi = async (id) => {
  const resp = await fetch(`${BASE_URL}/product/products?subcategoryId=${id}`, {
    method: "GET",
  });
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};

export const handleFilterApi = async (id) => {
  const resp = await fetch(
    `${BASE_URL}/subcategory/subcategories?categoryId=${id}`,
    {
      method: "GET",
    }
  );
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};

export const handleSingleProductApi = async (id) => {
  const resp = await fetch(`${BASE_URL}/product/product?productId=${id}`, {
    method: "GET",
  });
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};

export const handleAddToCartApi = async (id, token) => {
  const resp = await fetch(`${BASE_URL}/cart/carts?productId=${id}`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
  });
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};

export const handleRemoveFromCartApi = async (id, token) => {
  const resp = await fetch(`${BASE_URL}/cart/carts?itemId=${id}`, {
    method: "PATCH",
    headers: {
      Authorization: token,
    },
  });
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};

export const handleDeleteFromCartApi = async (id, token) => {
  const resp = await fetch(`${BASE_URL}/cart/carts?itemId=${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  if (resp.status !== 200) {
    const text = await resp.text();
    throw new Error(text);
  }
  return resp.json();
};
