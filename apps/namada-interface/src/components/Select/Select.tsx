import { Icon, IconName } from "components/Icon";
import React from "react";
import { Label, StyledSelect, StyledSelectWrapper } from "./Select.components";

export type Option<T> = {
  value: T;
  label: string;
};

type Props<T = string | number> = {
  value: T;
  label?: string | JSX.Element;
  data: Option<T>[];
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void | Promise<void>;
};

function Select<T>({
  value,
  label = "",
  data,
  style,
  onChange,
}: Props<T>): JSX.Element {
  return (
    <Label>
      {label}
      <StyledSelectWrapper>
        <StyledSelect onChange={onChange} value={`${value}`} style={style}>
          {data.map((option: Option<T>) => (
            <option key={`${option.value}`} value={`${option.value}`}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <Icon iconName={IconName.ChevronDown} />
      </StyledSelectWrapper>
    </Label>
  );
}

export default Select;