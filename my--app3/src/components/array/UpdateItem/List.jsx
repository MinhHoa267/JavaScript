import { useState } from "react";

export default function UpdateItem({ people, onUpdate }) {
  const [selectedId, setSelectedId] = useState("");
  const [newName, setNewName] = useState("");

  const handleUpdate = () => {
    if (selectedId && newName) {
      onUpdate(selectedId, newName);
      setNewName("");
    }
  };

  return (
    <div>
      <select onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Chọn người</option>
        {people.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <input
        placeholder="Tên mới"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdate}>Cập nhật</button>
    </div>
  );
}
