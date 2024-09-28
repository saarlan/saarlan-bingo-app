export type ItemDto = {
  id: string;
  createdAt: string;
  updatedAt: string;

  name: string;

  hasImage: boolean;
  imageUrl?: string;
};
