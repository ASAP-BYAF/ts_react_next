import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  };

  const calcNumberOfCharacters1 = () => {
    console.log("1 について文字数が再度計算されました。");
    return items.reduce((sub, item) => sub + item.length, 0);
  };

  const numberOfCharacters1 = calcNumberOfCharacters1();
  const numberOfCharacters2 = useMemo(() => {
    console.log("2 について文字数が再度計算されました。");
    return items.reduce((sub, item) => sub + item.length, 0);
  }, [items]);

  return (
    <div>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  );
};

export default UseMemo;
