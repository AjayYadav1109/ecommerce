import { BASE_URL } from "@/config";
import StarSvg from "@/assets/StarSvg";

export const CLIENTDETAILS = [
  {
    clients: "200+",
    discription: "International Brands",
  },
  {
    clients: "2,000+",
    discription: "High-Quality Products",
  },
  {
    clients: "30,000+",
    discription: "Happy Customers",
  },
];

export const ARRIVAL_PRODUCTS = [
  {
    title: "T-shirt with Tape Details",
    id: 1,
    rating: "4.5/5",
    rate: "$120",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image7.png",
    alt: "image-1",
  },
  {
    title: "Skinny Fit Jeans",
    id: 2,
    rating: "3.5/5",
    rate: "$240",
    discount: "$260",
    offer: "-20%",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image8.png",
    alt: "image-2",
  },
  {
    title: "Checkered Shirt",
    id: 3,
    rating: "4.5/5",
    rate: "$180",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image9.png",
    alt: "image-3",
  },
  {
    title: "Sleeve Striped T-shirt",
    id: 4,
    rating: "4.5/5",
    rate: "$130",
    discount: "$160",
    offer: "-30%",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image10.png",
    alt: "image-4",
  },
];

export const SELLING_PRODUCTS = [
  {
    title: "Vertical Striped Shirt",
    rating: "5/5",
    rate: "$212",
    star: [...Array(5)].map((_, i) => <StarSvg key={i} />),
    src: "/image11.png",
    alt: "image-5",
    discount: "$232",
    offer: "-20%",
    id: 5,
  },
  {
    title: "Courage Graphic T-shirt",
    rating: "4/5",
    rate: "$145",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image12.png",
    alt: "image-6",
    id: 6,
  },
  {
    title: "Loose Fit Bermuda Shorts",
    rating: "3/5",
    rate: "$80",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image13.png",
    alt: "image-7",
    id: 7,
  },
  {
    title: "Faded Skinny Jeans",
    rating: "4/5",
    rate: "$210",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image14.png",
    alt: "image-8",
    id: 8,
  },
];

export const DRESS_STYLE = [
  {
    title: "Casual",
    src: "/casual.png",
    alt: "casual",
  },
  {
    title: "Formal",
    src: "/formal.png",
    alt: "formal",
  },
  {
    title: "Party",
    src: "/party.png",
    alt: "party",
  },
  {
    title: "Gym",
    src: "/gym.png",
    alt: "gym",
  },
];

export const REVIEW_DETAILS = [
  {
    client: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    client: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    client: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export const ALL_SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

export const PAGE_NUMBER = ["1", "2", "...", "9", "10"];

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
