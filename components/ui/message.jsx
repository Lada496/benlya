import classes from "./no-item-message.module.css";

const Message = ({ text }) => {
  return <p className={classes.text}>{text}</p>;
};

export default Message;
