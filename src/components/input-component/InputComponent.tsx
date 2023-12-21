import { Button, Input } from "antd";
import "./InputComponent.scss";

const InputComponent = () => {
  return (
    <Input
      placeholder="Enter your email"
      className="search"
      size="large"
      suffix={
        <Button className="search-btn" type="primary">
          <span className="">&rarr;</span>
        </Button>
      }
    />
  );
};

export default InputComponent;
