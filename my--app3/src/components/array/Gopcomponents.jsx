import { useState } from "react";

// Đường dẫn đúng tới các component con
import AddList from "./AddItem/List";
import ReverseList from "./ReverseList/List";
import UpdateItem from "./UpdateItem/List";
import RandomColorWords from "./Randomcolorwords/List";

const initialStudents = [
  { id: 0, name: "Mai Xuân Gia Quyến", color: "#000000" },
  { id: 1, name: "Dr.Tiên", color: "#000000" },
  { id: 2, name: "Quý", color: "#000000" },
];

export default function Gopcomponents() {
  const [students, setStudents] = useState(initialStudents);

  const getRandomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, color: "#000000" }]);
  };

  const handleUpdateStudent = (id, newName) => {
    const updated = students.map((s) =>
      s.id === parseInt(id) ? { ...s, name: newName } : s
    );
    setStudents(updated);
  };

  const handleReverse = () => {
    setStudents([...students].reverse());
  };

  const handleChangeColor = (id) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, color: getRandomColor() } : s
    );
    setStudents(updated);
  };

  return (
    <div>
      <h1>Quản lý sinh viên</h1>

      <AddList onAdd={handleAddStudent} />
      <UpdateItem people={students} onUpdate={handleUpdateStudent} />
      <ReverseList onReverse={handleReverse} />

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <RandomColorWords text={student.name} color={student.color} />
            <button onClick={() => handleChangeColor(student.id)}>Đổi màu</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
