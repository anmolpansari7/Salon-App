import React from "react";
import EdiText from "react-editext";
import deleteButton from "./../../assets/delete_icon.svg";

const EditableListItems = ({
  id,
  name,
  cost,
  onItemChange,
  onCostChange,
  onDeleteItem,
}) => {
  return (
    <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
      <EdiText
        type="text"
        value={name}
        onSave={(val) => {
          onItemChange(val, id);
        }}
        className="w-8/12"
        cancelOnUnfocus
        cancelOnEscape
        submitOnEnter
        validation={(val) => val.length > 0}
        validationMessage="This field can not be empty."
        editOnViewClick={true}
      />

      <EdiText
        type="number"
        value={cost}
        onSave={(val) => {
          onCostChange(val, id);
        }}
        className=" ml-4"
        cancelOnUnfocus
        cancelOnEscape
        submitOnEnter
        validation={(val) => val > 0}
        validationMessage="Please Enter Price greater than zero."
        editOnViewClick={true}
      />
      <p className="self-center"> Rs.</p>
      <button
        type="button"
        onClick={() => {
          onDeleteItem(id);
        }}
      >
        <img src={deleteButton} alt="delete" />
      </button>
    </li>
  );
};

export default EditableListItems;
