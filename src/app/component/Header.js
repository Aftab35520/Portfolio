
export default function Header() {
   

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[calc(100%-160px)] flex justify-between">
                <p className="pt-5 pointer-events-auto">Aftab Alam</p>
                <div className="flex">
                    <p className="p-5 pointer-events-auto cursor-pointer">Home</p>
                    <p className="p-5 pointer-events-auto cursor-pointer" >About</p>
                    <p className="p-5 pointer-events-auto cursor-pointer">Service</p>
                    <p className="p-5 pointer-events-auto cursor-pointer">Blog</p>
                    <p className="pt-5 pointer-events-auto cursor-pointer">Contact</p>
                </div>
            </div>
        </div>
    )
}
