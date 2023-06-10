import { CheckboxOptionType, UploadFile } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ChangeEventHandler } from "react";

export interface InputProps {
  label?: string;
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  options?: object;
  optionsArr?: CheckboxOptionType[];
  schema?: any;
  defaultValue?: number | string;
  dependencies?: string;
  checkList?: CheckboxValueType[];
  hasFeedback?: boolean;
  disabled?: boolean;
  filelist?: UploadFile[] | any;
  onchange?: ChangeEventHandler<unknown>;
}
