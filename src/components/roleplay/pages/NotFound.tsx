import {bebas} from "@/app/font";


const NotFound = () => {
    return (
        <div className={'w-full h-screen flex flex-col gap-6 items-center justify-center'}>

            <img className={'w-60 object-cover'} src={'/images/nong_glorious.png'} alt="" />
            <p className={`text-3xl text-neutral-800 ${bebas.className}`}>404 | this page could not be found.</p>
        </div>
    );
};

export default NotFound;