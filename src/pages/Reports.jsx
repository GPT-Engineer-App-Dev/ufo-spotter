import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Reports() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Report a UFO Sighting</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <Input type="date" id="date" {...register("date", { required: true })} />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <Input type="text" id="location" {...register("location", { required: true })} />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <Textarea id="description" {...register("description", { required: true })} />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
          <Input type="file" id="image" {...register("image")} />
        </div>
        <Button type="submit" variant="primary" size="lg" className="w-full">Submit Report</Button>
      </form>
    </div>
  );
}

export default Reports;