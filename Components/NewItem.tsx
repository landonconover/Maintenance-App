import * as React from 'react';
import { useForm } from 'react-hook-form';

export default function List({ getData }) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const onSubmit = data => console.log("data",data);



  return (
    <div>
      <h4>New Item</h4>

      {/* // "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(getData)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="Item" {...register('text')} />

        <select {...register('freq')}>
          <option value="DAILY">Daily</option>
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">MONTHLY</option>
          <option value="QUARTERLY">Quarterly</option>
          <option value="YEARLY">Yearly</option>
        </select>

        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="date"
          defaultValue="Due Date"
          {...register('due', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
