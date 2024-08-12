import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, FormType } from "../schemas/formSchema";

const useForms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(formSchema),
    });
    return { register, handleSubmit, errors };
}
 
export default useForms;