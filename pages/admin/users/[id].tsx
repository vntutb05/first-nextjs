import { useRouter } from "next/router"
import Link from "next/link"

export default function userId(){
    let router=useRouter()
    console.log("route",router);
    function handOnClick(){
        router.push("/");
    };
    return (
        <>
            <h1>Admin-{router.query.id}</h1>
            <Link href="/">
                <button>GO to</button>
            </Link>
            <button onClick={handOnClick}>Go to Login</button>
        </>
    
    );
}