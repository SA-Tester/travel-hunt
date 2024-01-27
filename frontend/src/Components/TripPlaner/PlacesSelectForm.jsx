import { Button, Card, TextInput } from "flowbite-react";

const PlaceSelectForm = () => {
    return (
      <>
        <div className="w-11/12 md:max-w-2xl lg:max-w-2xl m-auto left-0 right-0  dark:bg-slate-800 border-0">
           <h4 className="text-xl font-extralight mb-4 text-center">
            Navigate Your Next Adventure: Discover, Plan, Explore with Ease!
          </h4>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            <form
              className="grid grid-cols-6  gap-1 grid-flow-row-dense"
              //   onSubmit={(e) => handleSearch(e)}
            >
              <div className="col-span-4 md:col-span-5 lg:col-span-5">
                <TextInput
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search"
                />
              </div>
              <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <button className="search-button" type="submit">
                  <svg
                    className="svgIcon"
                    viewBox="0 0 512 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                  </svg>
                  <span>Find Now</span>
                </button>
              </div>
            </form>
          </p>
        </div>
      </>
    );
}
 
export default PlaceSelectForm;