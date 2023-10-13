import React, { Children, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const Faq = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const { question } = props;

  return (
    <div className="w-full transition-all duration-700 ease-linear">
      <div className="px-2 flex flex-col  ">
        <Link
          onClick={() => setShowAnswer((prv) => !prv)}
          className="w-full flex items-center justify-between font-bold text-sm"
        >
          <Link to="#">{question}</Link>
          <BsArrowDown
            className={
              showAnswer
                ? " rotate-[180deg] transition-all duration-700 ease-linear"
                : " transition-all duration-700 ease-linear"
            }
          />
        </Link>

        {showAnswer && props.children}
      </div>
    </div>
  );
};

export default Faq;
