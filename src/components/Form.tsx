import useForms from "../hooks/useForms";
import { FormType } from "../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();
  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div className="w-full">
            <label className="block text-gray-700">Lastname</label>
            <input
              type="text"
              {...register("lastname")}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            <p className="text-red-500 text-sm">{errors.lastname?.message}</p>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Select a gender</label>
          <select
            id="gender"
            {...register("gender")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            defaultValue=""
          >
            <option value="Select">
              Select a gender
            </option>
            <option value="masculine">Masculine</option>
            <option value="feminine">Feminine</option>
            <option value="not">I prefer not to say</option>
          </select>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("agree")}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700">
              I agree to the terms and conditions
            </span>
          </label>
          <p className="text-red-500 text-sm">{errors.agree?.message}</p>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
