import {
  FormControl,
  InputLabel,
  Select,
  SelectProps,
  styled,
} from "@mui/material";
import { ReactNode, forwardRef } from "react";

interface DropdownProps extends SelectProps {
  children: ReactNode;
}

const StyledSelect = styled(Select)`
  width: 100px;
  &.MuiOutlinedInput-root {
    background: rgb(148, 187, 233);
    background: radial-gradient(
      circle,
      rgba(148, 187, 233, 1) 31%,
      rgba(120, 145, 236, 1) 99%,
      rgba(65, 62, 242, 1) 100%
    );

    color: white;
  }
  & .MuiInputLabel-root {
    color: white;
  }
`;

const StyledLabel = styled(InputLabel)`
  &.MuiInputLabel-root {
    color: white;
  }
`;

export const Dropdown = forwardRef<HTMLInputElement, DropdownProps>(
  ({ children, ...rest }: DropdownProps, ref) => {
    return (
      <FormControl className="w-80">
        <StyledLabel>{rest.label}</StyledLabel>
        <StyledSelect {...rest} ref={ref}>
          {children}
        </StyledSelect>
      </FormControl>
    );
  }
);

Dropdown.displayName = "dropdown";
