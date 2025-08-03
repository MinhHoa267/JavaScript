import { useState } from "react";

export default function AddList({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      const newItem = { id: Date.now(), name };
      onAdd(newItem); // Gọi hàm từ cha
      setName("");
    }
  };

  return (
    <div>
      <h2>Thêm sinh viên mới</h2>
      <input
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}
