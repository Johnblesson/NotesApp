import { NoteData, Tag } from "../../types";
import NoteForm from "./NoteForm";

export type CreateNoteProps = {
  onSubmit: (data: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;
// Thanks to Partial, we have done this
// All values ​​of a different type
// we transferred it to this "CreateNoteProps" type
// also because I'm using paritals
// all ? It can be undefined in some cases, such as defined with

const CreateNote = ({
  availableTags,
  onSubmit,
  createTag,
}: CreateNoteProps) => {
  return (
    <div className="container py-4">
      <h1>Create New Note</h1>
      <NoteForm
        availableTags={availableTags}
        createTag={createTag}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CreateNote;
