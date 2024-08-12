

export default function GradientCardContainer({ children }) {
    return (
        <div className="flex p-px rounded-xl shadow-2xl bg-gradient-to-br from-[#404040] from-0% to-55% to-[#202022]">
            <div className="p-6 w-full rounded-xl bg-bgcolor2
            sm:p-8">
                {children}
            </div>
        </div>
    )
}