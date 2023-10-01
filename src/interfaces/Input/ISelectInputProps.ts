import { ICustomInputProps } from "./ICustomInputProps";

export interface ISelectInputProps extends ICustomInputProps{
  name: string;
  options: string[];
}
