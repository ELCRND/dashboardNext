import Navbar from "../components/Dashboard/Navbar/Navbar";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

import styles from "../components/Dashboard/dashboard.module.css";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
