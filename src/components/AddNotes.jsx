import { motion } from "framer-motion";
import Header from "./Header";
import Button from "./Button";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AddNotesContent from "./AddNotesContent";
import { useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";
import toast from "react-hot-toast";

const AddNotes = () => {
  const id = useMemo(() => v4(), []);
  const navigate = useNavigate();
  const locatStorageData = JSON.parse(localStorage.getItem('notes')) || [];

  const [note, setNote] = useState({
    id: id,
    title: '',
    description: '',
    date: ''
  });
  console.log(note);


  useEffect(() => {
    const currentDate = new Date();
    const dateString = currentDate.toDateString();

    setNote(prev => ({
      ...prev,
      date: dateString,
    }))
  }, [])



  const onSaveClick = () => {
    if (!note.title || !note.description) {
      toast.error("All fields are required");
    }
    else {
      const updatedData = [...locatStorageData, note];
      localStorage.setItem('notes', JSON.stringify(updatedData));
      setNote({});
      navigate('/');
      toast.success('Note Added');
    }
  }

  return (
    <>
      <Header
        leftContent={
          <Link to="/">
            <Button
              icon={<IoIosArrowBack size={25} />}
            />
          </Link>
        }
        rightContent={
            <Button
              buttonName="Save"
              onClick={onSaveClick}
            />
        }
      />
      <h1 className="mt-5 mb-10 text-4xl font-medium text-center">
        Add note
      </h1>
      <AddNotesContent
        note={note}
        setNote={setNote}
      />
    </>
  )
}

export default AddNotes;