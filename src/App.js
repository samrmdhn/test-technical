import "./styles.css";
import { useState } from "react";

const INITIAL_DATA = {
  aspek_penilaian_1: {
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: ""
  },
  aspek_penilaian_2: {
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: ""
  },
  aspek_penilaian_3: {
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: ""
  },
  aspek_penilaian_4: {
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: ""
  }
};

export default function App() {
  const [datas, setDatas] = useState(INITIAL_DATA);

  const options = [];

  for (let i = 1; i <= 10; i++) {
    options.push(<option key={i} value={i} label={i} />);
  }

  const mahasiswa = [];

  for (let i = 1; i <= Object.keys(datas.aspek_penilaian_1).length; i++) {
    if (i === Object.keys(datas.aspek_penilaian_1).length) {
      mahasiswa.push(
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          {" "}
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
              style={{ height: "20px", width: "20px", borderRadius: "50%" }}
              alt="Profile Picture"
            />
          </div>{" "}
          <div>Mahasiswa {i}</div>
        </div>
      );
    } else {
      mahasiswa.push(
        <div
          style={{
            marginBottom: "24px",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          {" "}
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
              style={{ height: "20px", width: "20px", borderRadius: "50%" }}
              alt="Profile Picture"
            />
          </div>{" "}
          <div>Mahasiswa {i}</div>
        </div>
      );
    }
  }

  function handlePenilaian(e, key, k) {
    setDatas((prevDatas) => ({
      ...prevDatas,
      [key]: {
        ...prevDatas[key],
        [k]: e.target.value
      }
    }));
  }

  function handleClick() {
    console.log(datas);
  }

  return (
    <div className="App">
      <h1>Aplikasi Penilaian Mahasiswa</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "end", gap: "10px" }}>
          <div>{mahasiswa}</div>
          <div style={{ display: "flex", gap: "5px" }}>
            {Object.keys(datas).map((aspekPenilaian) => {
              return (
                <div key={aspekPenilaian}>
                  {aspekPenilaian
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                  {Object.keys(datas[aspekPenilaian]).map((mhs) => {
                    return (
                      <div key={mhs} style={{ marginTop: "30px" }}>
                        <select
                          style={{ width: "100%" }}
                          onChange={(e) =>
                            handlePenilaian(e, aspekPenilaian, mhs)
                          }
                        >
                          {options}
                        </select>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button style={{ marginTop: "20px" }} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
