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
  dependencies?: string;
  schema?: any;
  hasFeedback?: boolean;
  onchange?: ChangeEventHandler<unknown>;
}
