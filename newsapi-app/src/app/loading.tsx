export default function LoadingHome() {
  return (
    <>
      <section className="flex flex-row flex-wrap h-screen bg-base-200">
        <section id="carousel news" className="w-2/5 h-1/2 p-4">
          {/* Carousel */}
          <div className="skeleton w-full min-h-[290px]"></div>
        </section>

        <section
          id="general-news"
          className="grid grid-cols-3 h-1/2 w-3/5 gap-4 p-4"
        >
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </section>

        <section
          id="sports-news"
          className="flex w-3/5 h-1/2 justify-center p-4"
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-none shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-[640px]"></div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-none shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-[640px]"></div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-none shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-[640px]"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="random-news"
          className="relative flex w-2/5 h-1/2 justify-center p-4"
        >
          <div className="skeleton w-full min-h-[290px]"></div>
        </section>
      </section>
    </>
  );
}
