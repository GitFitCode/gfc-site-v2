import React from "react";
import { useNavigationContext } from "../../contexts/navigation.context";
import { PuffLoader } from "react-spinners"; // Example spinner, feel free to change

export default function NavigationLoader() {
  const { isNavigating } = useNavigationContext();

  return (
    <div>
      {isNavigating && (
        <div style={styles.overlay}>
          <PuffLoader size={150} color={"#00C9CD"} loading={true} />
          {/* <p>Loading...</p> */}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 9999,
  },
};