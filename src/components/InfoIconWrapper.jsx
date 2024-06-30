

export default function InfoIconWrapper({ children }) {
    return (
        <div className="flex justify-center items-center p-px rounded-lg shadow-xl bg-gradient-to-br from-[#404040] from-0% to-55% to-bgcolor2
        sm:p-0.5 sm:rounded-xl
        ">
            <div className="flex items-center p-2 w-full h-full rounded-lg bg-[#202022]
            sm:p-3 sm:rounded-xl
            ">
                {children}
            </div>
        </div>
    )
}