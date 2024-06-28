

export default function GradientCardContainer({ children }) {
    return (
        <div className="flex justify-center items-center p-px rounded-xl shadow-2xl bg-gradient-to-br from-[#404040] to-50% to-[#202022]">
            <div className="p-8 w-full rounded-xl bg-bgcolor2">
                {children}
            </div>
        </div>
    )
}