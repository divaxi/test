import { Product, Product_Detail } from "../interface";
import { getDummyImage } from "./productfun";
export const Products: Product[] = [
  {
    id: 3,
    name: "Sao 1m55 Alu",
    image: getDummyImage("product-square-3.jpg"),
  },
  {
    id: 2,
    name: "Sao 2m Alu",
    image: getDummyImage("product-square-2.jpg"),
  },
  {
    id: 10,
    name: "Sao 2m4 Alu",
    image: getDummyImage("product-square-10.jpg"),
  },
  {
    id: 1,
    name: "Sao 2m4 Alu Full Color",
    image: getDummyImage("product-square-1.jpg"),
  },
  {
    id: 4,
    name: "Sao 3m6 Alu Full Color",
    image: getDummyImage("product-square-4.jpg"),
  },
  {
    id: 5,
    name: "Sao 12 cánh Alu Full Color",
    image: getDummyImage("product-square-5.jpg"),
  },
  {
    id: 9,
    name: "Cây thông",
    image: getDummyImage("product-square-9.jpg"),
  },
  {
    id: 11,
    name: "Sao 5 cánh khung nhựa",
    image: getDummyImage("product-square-11.jpg"),
  },
  {
    id: 12,
    name: "Sao 8 cánh khung nhựa",
    image: getDummyImage("product-square-12.jpg"),
  },
  {
    id: 8,
    name: "Sao 1m4",
    image: getDummyImage("product-square-8.jpg"),
  },
  {
    id: 6,
    name: "Sao 8 cánh đều",
    image: getDummyImage("product-square-6.jpg"),
  },
  {
    id: 7,
    name: "Sao 5 cánh",
    image: getDummyImage("product-square-7.jpg"),
  },
  {
    id: 13,
    name: "Pháo hoa điện",
    image: getDummyImage("product-square-13.JPG"),
  },
];
export const ProductsDetail: Product_Detail[] = [
  {
    id: 1,
    name: "SAO 2M4 ALU FULL COLOR",
    description:
      "Chất liệu: Alumine. Cao:2m4 Rộng:1m4. Bóng:Full Color, có chữ chạy. 16 Tia Full Color",
    video:
      "https://geo.dailymotion.com/player/xj3qv.html?video=x8nt34z",
    more: [getDummyImage("grid-2m4-1.jpg"), getDummyImage("grid-2m4-2.jpg")],
  },
  {
    id: 2,
    name: "SAO 2M ALU",
    description:
      "Chất liệu: Alumine. Cao:2m Rộng:1m. Bóng:LED ngũ sắc. 8 Tia Full Color",
    video:
      "https://geo.dailymotion.com/player/xj3qv.html?video=x8nszhh",
    more: [getDummyImage("grid-2m-1.jpg"), getDummyImage("grid-2m-2.jpg")],
  },
  {
    id: 10,
    name: "SAO 2M4 ALU",
    description:
      "Chất liệu: Alumine. Cao:2m4 Rộng:1m4. Bóng:LED ngũ sắc. 16 Tia Full Color",
    video:"https://geo.dailymotion.com/player/xj3qv.html?video=x8nszhb",
    more: [getDummyImage("grid-2m4-kofull-1.jpg")],
  },
  {
    id: 11,
    name: "SAO 5 CÁNH KHUNG NHỰA",
    description: "Chất liệu: Nhựa đúc.Dài: , Rộng:. Bóng: LED",
    video: "https://geo.dailymotion.com/player/xj3o8.html?video=x8nt354",
    more: [getDummyImage("grid-5canh-khung-1.jpg")],
  },
  {
    id: 12,
    name: "SAO 8 CÁNH KHUNG NHỰA",
    description:
      "Chất liệu: Nhựa đúc. Dài: 90cm, Rộng: 90cm. Bóng:FULLCOLOR(Cũng có loại Bóng: LED)",
    video: "https://geo.dailymotion.com/player/xj3o8.html?video=x8nt351",
    more: [getDummyImage("grid-8canh-khung-1.jpg")],
  },
  {
    id: 3,
    name: "SAO 1M55 ALU",
    description:
      "Chất liệu: Alumine. Cao:1m55 Rộng:90cm. Bóng:LED ngũ sắc. 8 Tia LED",
    video:
      "https://geo.dailymotion.com/player/xj3qv.html?video=x8nszha",
    more: [getDummyImage("grid-1m4-1.jpg"), getDummyImage("grid-1m4-2.jpg")],
  },
  {
    id: 4,
    name: "SAO 3M6 ALU FULL COLOR",
    description:
      "Chất liệu: Alumine. Cao:3m6 Rộng:1m9. Bóng:Full Color, có chữ chạy. 16 Tia Full Color. Có thể gấp đôi lại được",
    video:
      "https://geo.dailymotion.com/player/xj3qv.html?video=x8nszhc",
    more: [
      getDummyImage("grid-3m6-1.jpg"),
      getDummyImage("grid-3m6-2.jpg"),
      getDummyImage("grid-3m6-3.jpg"),
      getDummyImage("grid-3m6-4.jpg"),
      getDummyImage("grid-3m6-5.jpg"),
    ],
  },
  {
    id: 5,
    name: "SAO 12 CÁNH ALU FULL COLOR",
    description:
      "Chất liệu: Alumine. Dài:1m5 Rộng:1m5. Bóng:LED, 12 Tia Full Color",
    video:
      "https://geo.dailymotion.com/player/xj3qv.html?video=x8nt355",
    more: [
      getDummyImage("grid-12canh-1.jpg"),
      getDummyImage("grid-12canh-2.jpg"),
    ],
  },
  {
    id: 6,
    name: "SAO 8 CÁNH ĐỀU",
    description:
      "Chất liệu: Nhựa, Decal. Dài:1m4 Rộng:1m4. Bóng:LED, 8 Tia LED",
    video:
      "https://geo.dailymotion.com/player/xj3qv.html?video=x8nt350",
    more: [getDummyImage("grid-8canh-1.jpg")],
  },
  {
    id: 7,
    name: "SAO 5 CÁNH",
    description: "Chất liệu: Nhựa, Decal. Dài:85cm Rộng:85cm. Bóng:LED",
    video: "https://geo.dailymotion.com/player/xj3qv.html?video=x8nszhd",
    more: [getDummyImage("grid-5canh-1.jpg")],
  },
  {
    id: 8,
    name: "SAO 1M4",
    description:
      "Chất liệu: Nhựa, Decal. Cao:1m4 Rộng:85cm. Bóng:LED, 8 Tia LED",
    video:
      "https://geo.dailymotion.com/player/xj3qv.html?video=x8nt356",
    more: [getDummyImage("grid-1m4-1-old.jpg")],
  },
  {
    id: 9,
    name: "CÂY THÔNG",
    description: "Cao:2m4 Đường kính:90cm. Bóng:FULLCOLOR",
    video: "https://geo.dailymotion.com/player/xj3qv.html?video=x8nszhe",
    more: [getDummyImage("grid-caythong-1.jpg")],
  },
  {
    id: 13,
    name: "PHÁO HOA ĐIỆN",
    description: "Đường kính: 3m. 25 tia, Bóng:FULLCOLOR.",
    video: "https://geo.dailymotion.com/player/xj3qv.html?video=x8nszhf",
    more: [getDummyImage("grid-phaohoa-1.JPG")],
  },
];
