import Link from "next/link"
import { BsArrow90DegLeft } from "react-icons/bs"

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-vingo">
          <BsArrow90DegLeft className="h-6 w-6 text-vingo mr-2" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}
