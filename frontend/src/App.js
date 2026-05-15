import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");

  const bookAppointment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/appointments",
        {
          patientName,
          doctorName,
          date,
        },
      );

      alert(response.data.message);
    } catch (error) {
      alert("Error booking appointment");
      console.log(error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Online Doctor Consultation System</h1>

      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <br />

      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <br />

      <button
        onClick={bookAppointment}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default App;
