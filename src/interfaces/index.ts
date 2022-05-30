export interface IReturn {
  success: boolean;
  message: string;
  data: unknown;
  errors?: string[];
}
