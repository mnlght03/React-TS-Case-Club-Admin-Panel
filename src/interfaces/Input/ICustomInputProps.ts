export interface ICustomInputProps {
  placeholder?: string;
  name?: string;
  label?: string;
  subscript?: string;
  limit?: number;
  width?: string;
  value?: string | number;
  onChange?: ((e: any) => void) | ((e: any) => Promise<void>)
}
 