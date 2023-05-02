import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlerteVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlerteVisible(false)}>mon alerte</Alert>
      )}
      <Button color="secondary" onClick={() => setAlerteVisible(true)}>
        Mon bouton
      </Button>
    </div>
  );
}

export default App;
