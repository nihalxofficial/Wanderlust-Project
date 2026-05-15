import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-white">
            <ul className="flex justify-between items-center gap-3">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destinations"}>Destinations</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
                <li><Link href={"/admin"}>Admin</Link></li>
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
                <li><Link href={"/login"}>Login</Link></li>
                <li><Link href={"/signup"}>Sign Up</Link></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;