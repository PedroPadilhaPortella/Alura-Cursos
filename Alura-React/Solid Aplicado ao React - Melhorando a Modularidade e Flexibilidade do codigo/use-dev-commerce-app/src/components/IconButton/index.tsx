import Button, { ButtonProps } from "../Button";

const IconButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button style={{ gap: '8px' }} {...props}>
      {children}
    </Button>
  );
};

export default IconButton;
