import { SubmitHandler, useForm } from 'react-hook-form';

interface AddItemProps {
  onAdd: (name: string) => void;
}

interface FormFiels {
  name: string;
}

const AddItem = (props: AddItemProps) => {
  const { onAdd } = props;
  const { register, handleSubmit, reset } = useForm<FormFiels>();

  const onSubmit: SubmitHandler<FormFiels> = (formData: FormFiels) => {
    onAdd(formData.name);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between">
        <input
          {...register('name')}
          type="text"
          className="flex-grow p-2 rounded-l"
          placeholder="Enter new element"
        />
        <input className="text-white bg-blue-500 p-2 rounded-r" type="submit" value="Add" />
      </div>
    </form>
  );
};

export default AddItem;
