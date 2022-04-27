import { useState } from "react";
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  return (
    <div
      tabIndex={card.id} 
      className={cn("flip-card-outer", { 
      })} 
      onClick={handleClick}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
      </div>
    </div>
  );
}

export default FlipCard;