import Title from "@/components/UI/Title";
import LoginForm from "@/components/partials/form/LoginForm";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <div className={styles.drawer}>
      <Title title="Login" Level="h1" />
      <LoginForm />
    </div>
  );
};

export default Index;
