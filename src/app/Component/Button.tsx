import Image from "next/image"

type ButtonProps ={
    type:'button'|'submit'
    title: string
    icon?: string
    variant: string
    full?: boolean
}

const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button 
className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    type='button'>
        {icon && <Image src={icon} alt={title} height={24} width={24}/>}
        <label className="whitespace-nowrap cursor-pointer bold-16"> {title} </label>
    </button>
  )
}

export default Button
