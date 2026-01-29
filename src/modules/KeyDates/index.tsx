import Slideshow from "./Slideshow";

interface Props {
  dates?: Array<{
    date: string;
    dateInfo: string[];
  }>;
  images?: Array<{
    asset: {
      _id: string;
      url: string;
    };
  }>;
}

export default function KeyDates({
  dates = [],
  images = [],
}: Props) {
  return (
    <section className="bg-black container-xl py-20">
      <div className="mb-10">
        <h5 className="h4 mb-4 md:mb-0">Key dates </h5>
      </div>

      <div className="w-full relative flex flex-col sm:flex-row h-full">
        <div className="relative w-full border-t">
          {dates?.map((item, i) => (
            <div key={i} className="flex flex-wrap border-b">
              <div className="w-full flex flex-row items-center">
                <h4 className="h6 pt-6 pb-6 w-full max-w-[130px] sm:max-w-[175px] text-balance">
                  {item.date}
                </h4>

                <div className="pl-4 sm:pl-10 flex flex-col w-full monospace">
                  {item?.dateInfo?.map((info, i) => (
                    <div
                      key={i}
                      className="border-b last:border-b-0 py-6 bodycopy"
                    >
                      {info}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {images && images.length > 0 && (
          <div className="w-full relative mt-8 sm:mt-0 sm:ml-20 sm:sticky sm:top-30 self-start sm:max-w-[50%]">
            <div className="w-full relative">
              <Slideshow images={images} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}