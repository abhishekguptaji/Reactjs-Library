


function Card({username,btnText="visit me"}){
  return (
    <>
          <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 max-w-md mx-auto mt-10">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="The_images.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4 text-center">
          <blockquote>
            <p className="text-lg font-medium text-slate-900 dark:text-white">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {btnText}
            </div>
          </figcaption>
        </div>
      </figure>
    
    </>
  )
};



export default Card;