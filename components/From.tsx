'use client'
import { createCamps } from "@/utils/action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ()=>{
    const { pending } = useFormStatus()
    return <button type="submit" disabled={pending}>
        {pending
        ? 'Submitting.....'
        : 'Submit'
        }
    </button>
}


const From = () => {
    const [message, formAction] = useActionState(createCamps, null)




    return (
        <>
            
            {message && <h1>{message}</h1>}
            <form action={formAction}>
                From
                <input
                    placeholder="Camoing Name"
                    name="title"
                    className="border"
                    defaultValue="Korat Route 3060"
                />
                <input
                    placeholder="location"
                    name="location"
                    className="border"
                    defaultValue="Korat"
                />
                <SubmitButton />
            </form>
        </>
    )
}
export default From;