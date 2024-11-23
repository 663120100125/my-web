import Link from "next/link";

//rafce
const page = async () => {
    await new Promise((resolve) => setInterval(resolve,1000))

    return (
        <>
            <h1>Hello Witcanu</h1>
            <p>Description</p>
        </>
    );
}
export default page