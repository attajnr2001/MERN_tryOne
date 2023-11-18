import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [file, setFile] = useState(null); // Use null as initial value
  const [per, setPerc] = useState(0);
  const [data, setData] = useState({ img: "" });
  const navigate = useNavigate()

  useEffect(() => {
    const uploadFile = () => {
      if (file) {
        const name = new Date().getTime() + file.name;

        console.log(name);
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPerc(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setData((prev) => ({ ...prev, img: downloadURL }));
            });
          }
        );
      }
    };
    uploadFile();
  }, [file]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3300/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          salary,
          profileImageUrl: data.img,
        }),
      });

      if (response.ok) {
        console.log("User added successfully");
        navigate("/")
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div className="addUser">
      Add User
      <form>
        <div className="control">
          <input
            type="text"
            placeholder="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="control">
          <input
            type="text"
            placeholder="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="control">
          <input
            type="text"
            placeholder="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="file">
            <img src={file ? URL.createObjectURL(file) : ""} alt="" />
          </label>
          <input
            id="file"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        <button onClick={handleSubmit} disabled={per < 100}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
