import styles from "./outercomponent.module.css";
export default function OuterComponent({ children, className }) {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}
