import React from 'react';

function PortfolioItem({ imgUrl, title, stack, deployUrl, projectUrl }) {
  return (
        <div
            className="group border border-white rounded-md overflow-hidden relative hover:border-stone-300"
        >
          <img
              src={imgUrl}
              alt="portfolio"
              className="w-full h-36 md:h-48 object-cover group-hover:blur-sm group-hover:opacity-50 duration-500 group-hover:scale-125"
          />
          <div className="w-full rounded-md h-full duration-700 translate-y-[-100%] bg-transparent absolute z-10 top-0 flex group-hover:translate-y-[0%] group-hover:duration-700">
                <div className="flex items-center flex-col absolute left-4 top-6 gap-4">
                    <a
                      href={projectUrl}
                      className="hover:opacity-75 hover:cursor-pointer"
                    >
                      <img
                        src="src/assets/coding.png"
                        alt=""
                        className="w-20 h-20 object-cover"
                      />
                    </a>              
                    <a
                      href={deployUrl}
                      className="px-3 py-1 hover:opacity-75 uppercase bg-red-500 rounded-md z-20 hover:shadow-lg hover:cursor-pointer"
                    >
                      view
                    </a>
                </div>
                <div className="w-full p-3 pt-1 absolute bottom-0">
                  <h3 className="text-2xl mb-2 font-semibold flex justify-end select-none">
                      {title} 
                  </h3>
                  <p className="flex flex-wrap gap-2 flex-row items-center text-white justify-end text-xs">
                    {stack.map(item => (
                        <span
                            key={item} 
                            className="inline-block px-1.5 leading-4 font-semibold border border-white rounded-md text-sm py-1 select-none"
                        >
                            {item}
                        </span>
                    ))}
                  </p>
                </div>
          </div>     
        </div>
  );
}

export default PortfolioItem;