import { useForm } from "react-hook-form";

function SupabaseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    // TODO: send to Supabase here

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Project Name</label>
        <input
          type="text"
          {...register("projectName", {
            required: "Project name is required",
            minLength: {
              value: 5,
              message: "Project name must be at least 5 characters"
            }
          })}
        />
        {errors.projectName && <p>{errors.projectName.message}</p>}
      </div>

      <div>
        <label>Developer Email</label>
        <input
          type="email"
          {...register("developerEmail", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email"
            }
          })}
        />
        {errors.developerEmail && <p>{errors.developerEmail.message}</p>}
      </div>

      <div>
        <label>Priority Level</label>
        <select
          {...register("priorityLevel", {
            required: "Priority level is required"
          })}
        >
          <option value="">Select priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priorityLevel && <p>{errors.priorityLevel.message}</p>}
      </div>

      <div>
        <label>Deployment Date</label>
        <input
          type="date"
          {...register("deploymentDate", {
            required: "Deployment date is required"
          })}
        />
        {errors.deploymentDate && <p>{errors.deploymentDate.message}</p>}
      </div>

      <div>
        <label>Version Number</label>
        <input
          type="number"
          step="0.1"
          {...register("versionNumber", {
            required: "Version number is required",
            valueAsNumber: true,
            validate: (value) =>
              value > 0 || "Version number must be greater than 0"
          })}
        />
        {errors.versionNumber && <p>{errors.versionNumber.message}</p>}
      </div>

      <div>
        <label>
          <input type="checkbox" {...register("isPublic")} />
          Is Public
        </label>
      </div>

      <div>
        <label>Repository URL</label>
        <input
          type="url"
          {...register("repositoryUrl", {
            required: "Repository URL is required",
            pattern: {
              value: /^(https?:\/\/[^\s]+)$/i,
              message: "Enter a valid URL starting with http or https"
            }
          })}
        />
        {errors.repositoryUrl && <p>{errors.repositoryUrl.message}</p>}
      </div>

      <div>
        <label>Team Lead</label>
        <input
          type="text"
          {...register("teamLead", {
            required: "Team lead is required"
          })}
        />
        {errors.teamLead && <p>{errors.teamLead.message}</p>}
      </div>

      <div>
        <label>Budget Code</label>
        <input
          type="password"
          {...register("budgetCode", {
            maxLength: {
              value: 8,
              message: "Budget code must be at most 8 characters"
            }
          })}
        />
        {errors.budgetCode && <p>{errors.budgetCode.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea
          {...register("description", {
            maxLength: {
              value: 200,
              message: "Description must be at most 200 characters"
            }
          })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SupabaseForm;

