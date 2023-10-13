import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-60">
      
      <div className="p-4 flex flex-col justify-center text-white ">
        <div className="group h-96 w-96 [perspective:1000px]   rounded-4xl">
            <div className="relative h-full w-full rounded-4xl  shadow-2xl shadow-black dark:shadow-primary transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className = "h-full w-full rounded-4xl object-cover shadow-xl shadow-black " src = "https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"/>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-4xl bg-cover px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"  style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0, 0.6)), url('https://thumbs.dreamstime.com/b/cute-brown-dog-apron-hammer-close-up-indoors-studio-shot-congratulations-family-relatives-loved-ones-friends-colleagues-283605894.jpg')"}}>
                    <div className="flex min-h-full flex-col items-center justify-center">
                       
                        <h1 className="text-2xl font-bold">
                            Vrushab
                        </h1>
                        <p className="text-lg">
                            Description
                        </p>
                        <br/><br/>
                         <h3 className="text-center">
            <Link
              href="/"
              className="mb-4 block text-l font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#0284c7] to-[#38bdf8] rounded-full p-2 text-white hover:text-black dark:text-white dark:hover:text-black sm:text-m"
            >
              Know More
            </Link>
          </h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
   
    </main>
  )
}
