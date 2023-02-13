export interface IImage {
  id:string,
  largeImageURL: string;
  webformatURL: string;
  tags: string;
};

export interface IResponse{
  totalHits:number,
  hits:IImage[]
}
