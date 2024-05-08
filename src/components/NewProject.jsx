import { useRef } from 'react';
import Input from "./Input";

export default function NewProject({onSaveNewProject}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation

    onSaveNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={title}/>
        <Input label="Description" ref={description} isTextArea="true"/>
        <Input label="Due Date" ref={dueDate} type="date"/>
      </div>
    </div>
  )
}
