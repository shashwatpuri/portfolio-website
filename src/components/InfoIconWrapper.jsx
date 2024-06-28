

export default function InfoIconWrapper({ children }) {
    return (
        <div className="flex justify-center items-center p-0.5 rounded-xl shadow-xl bg-gradient-to-br from-[#404040] from-0% to-55% to-bgcolor2">
            <div className="flex items-center p-3 w-full h-full rounded-xl bg-[#202022]">
                {children}
            </div>
        </div>
    )
}