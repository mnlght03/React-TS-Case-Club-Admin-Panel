export interface IService<T> {
  fetchAll(): Promise<T[]>;
  uploadAll(items: T[]): Promise<void>;
  deleteAll(items: T[]): Promise<void>;
}