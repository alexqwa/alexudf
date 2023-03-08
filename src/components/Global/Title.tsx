interface titleProps {
  title: string
}

export function Title({ title }: titleProps) {
  return (
    <h1 className="text-white font-bold text-4xl relative w-fit after:content-[''] after:mt-3 after:absolute after:left-0 after:-bottom-2 after:w-[70%] after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-transparent">
      {title}
    </h1>
  )
}
