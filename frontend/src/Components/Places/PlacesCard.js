import { Button } from "flowbite-react";

const PlacesCard = () => {
  return (
    <div class="h-[25vh] relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <img
        class="rounded-lg h-[25vh]"
        src="https://tecdn.b-cdn.net/img/new/slides/017.webp"
        alt=""
      />
      <div className="absolute top-1 right-0">
        <Button
        className="bg-transparent border-0 w-min px-0 py-0"
        >
          <svg
            class="w-4 h-4 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 19"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
            />
          </svg>
        </Button>
      </div>
      <div class="absolute bottom-0 p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight text-white text-ellipsis">
          Card title
        </h5>
        <p className="text-white">
          <small>this is some text</small>
        </p>
      </div>
    </div>
  );
};

export default PlacesCard;
