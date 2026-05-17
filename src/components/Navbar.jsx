"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user;

    console.log(user);
    const handleSignOut = async() => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    }

    return (
        <nav className="flex justify-between items-center p-5 bg-white">
            <ul className="flex justify-between items-center gap-3">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destinations"}>Destinations</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
                <li><Link href={"/add-destination"}>Add Destination</Link></li>
                {/* <li><Link href={"/admin"}>Admin</Link></li> */}
            </ul>

            <div>
                <Image
                    src={"/assets/Wanderlast.png"}
                    alt="Wanderlast"
                    width={150}
                    height={150}
                ></Image>
            </div>

            <ul className="flex justify-between items-center gap-3">
                <li><Link href={"/profile"}>Profile</Link></li>
                {user ? <li><Button onClick={handleSignOut} variant="danger">Sign Out</Button></li> :
                    <>
                        <li><Link href={"/login"}>Login</Link></li>
                        <li><Link href={"/signup"}>Sign Up</Link></li>
                    </>}
            </ul>

        </nav>
    );
};

export default Navbar;