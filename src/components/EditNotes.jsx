import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import { IoIosArrowBack } from "react-icons/io";
import Button from "./Button";
import { useEffect, useState } from "react";
import AddNotesContent from "./AddNotesContent";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";

const EditNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const localStorageData = JSON.parse(localStorage.getItem('notes'));
  const noteData = localStorageData.find((data) => (
    data.id === id
  ));
  const [note, setNote] = useState(noteData);

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
      const updatedData = localStorageData.map(item => {
        if (item.id === id) {
          return note;
        }
        return item;
      });
      localStorage.setItem('notes', JSON.stringify(updatedData));
      setNote({});
      navigate('/');
      toast.success('Note Updated');
    }
  }

  const onDeleteClick = () => {
    const updatedData = localStorageData.filter(items => items.id !== id);
    localStorage.setItem('notes', JSON.stringify(updatedData));
    setNote({});
    toast.success('Note Deleted');
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
          <div className="flex gap-3 items-center justify-center">
            <Link to="/" className="group">
              <Button
                icon={
                  <MdDeleteOutline
                    size={25}
                    className="group-hover:text-red-500"
                  />
                }
                onClick={onDeleteClick}
              />
            </Link>
            <Button
              buttonName="Save"
              onClick={onSaveClick}
            />
          </div>

        }
      />
      <h1 className="mt-5 mb-10 text-4xl font-medium text-center">
        Edit note
      </h1>
      <AddNotesContent
        note={note}
        setNote={setNote}
      />
    </>
  )
}

export default EditNotes;