// IMPORT HOOKS DARI REACT
import { useState, useEffect } from "react";
import "./App.css"; // Import file CSS

function App() {
  const [students] = useState([
    // Data Mahasiswa (useState dan .map())
    { id: 1, nim: "4524210050", nama: "Kornel", noHp: "081234567801", email: "kornel@mail.com", alamat: "Bogor", prodi: "Informatika", tahun: 2024 },
    { id: 2, nim: "4524210073", nama: "Dine", noHp: "081234567802", email: "dine@mail.com", alamat: "Depok", prodi: "Sipil", tahun: 2024 },
    { id: 3, nim: "4524210076", nama: "Najwa", noHp: "081234567803", email: "najwa@mail.com", alamat: "Depok", prodi: "Informatika", tahun: 2024 },
    { id: 4, nim: "4524210080", nama: "Yayast", noHp: "081234567804", email: "yayast@mail.com", alamat: "Jakarta", prodi: "Informatika", tahun: 2024 },
    { id: 5, nim: "4524210108", nama: "Piyellz", noHp: "081234567805", email: "piyellz@mail.com", alamat: "Depok", prodi: "Industri", tahun: 2024 },
  ]);

  // useEffect (Live Clock)
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date()); // Update state waktu
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // Array kosong

  // tampilann
  return (
    <div className="container">
      {/* HEADER */}
      <div className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </div>

      {/* INFO JUMLAH & JAM DIGITAL */}
      <div className="info-bar">
        <div className="info-item">
          Total Mahasiswa: <strong>{students.length}</strong>
        </div>
        <div className="info-item">
          Waktu Saat Ini: <strong className="jam">{waktu.toLocaleTimeString("id-ID")}</strong>
        </div>
      </div>

      {/* TABEL DATA MAHASISWA */}
      <table className="tabel-mahasiswa">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama Mahasiswa</th>
            <th>No. Hp</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Program Studi</th>
            <th>Tahun Masuk</th>
          </tr>
        </thead>
        <tbody>
          {/* LOOPING DATA MENGGUNAKAN .map() */}
          {students.map((mhs) => (
            // key={mhs.id} WAJIB ada agar React bisa membedakan tiap baris
            <tr key={mhs.id}>
              <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.noHp}</td>
              <td>{mhs.email}</td>
              <td>{mhs.alamat}</td>
              <td>{mhs.prodi}</td>
              <td>{mhs.tahun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
