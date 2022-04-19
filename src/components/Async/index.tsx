import { useEffect, useState } from "react";

export function Async() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Async</div>
      {visible && <button>Visible button</button>}
    </div>
  );
}
