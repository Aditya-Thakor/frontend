import { UploadFile } from "antd";
import { ChangeEventHandler } from "react";
import * as yup from "yup";
export interface InputProps {
  label?: string;
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  options?: object;
  optionsArr?: object[];
  schema?: any;
  defaultValue?: number | string;
  dependencies?: string;
  hasFeedback?: boolean;
  filelist?: UploadFile[] | any;
  onchange?: ChangeEventHandler<unknown>;
}
