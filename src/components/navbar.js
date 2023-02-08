import Link from "next/link";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";


export default function Navbar() {
    return (
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center">
            <div className='order-2 flex-none md:w-96 sm:order-1'>
                <input type="text" className="input-text" placeholder="Search..." />
            </div>
            <div className="shrink w-80 sm:order-2 text-3xl uppercase">
                <Link href={"/"}>
                    Ideal Blogs
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center mt-1 sm:mt-0">
                <div className="flex gap-4 text-3xl">
                    <Link href={"https://www.facebook.com/"}><FaFacebookSquare color=" #3b5998" /></Link>
                    <Link href={"https://twitter.com/"}><FaTwitterSquare color="#00acee" /></Link>
                    <Link href={"https://youtube.com/"}><FaYoutubeSquare color="#FF0000" /></Link>
                </div>
            </div>
        </div>
    )

}