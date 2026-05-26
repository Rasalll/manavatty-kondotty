export interface GalleryItem {
  id: string;
  title: string;
  category: "flowers" | "bridal" | "fancy" | "jewellery" | "cosmetics";
  imageUrl: string;
  description: string;
}
