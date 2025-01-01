import React from "react";

type Props = {
  title: string;
  description: string;
  event?: string;
  linkEvent?: string;
  titleButton?: string;
  linkButton?: string;
  linkSaibaMais?: string;
};

export const Content = ({
  title,
  description,
  event,
  linkEvent,
  titleButton,
  linkButton,
  linkSaibaMais,
}: Props) => {
  return (
    <section id="content" className="text-gray-600 body-font bg-[#0a0a0a]">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3c0781] to-[#0d00c0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {event && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {event}{" "}
                {linkEvent && (
                  <a href={linkEvent} className="font-semibold text-indigo-300">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Saiba mais <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              {title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
              {description}
            </p>

            {titleButton && linkButton && (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                target="_blank"
                  href={linkButton}
                  className="rounded-md bg-[#0055f8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d00c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {titleButton}
                </a>
                {linkSaibaMais && (
                  <a
                    href={linkSaibaMais}
                    className="text-sm/6 font-semibold text-white"
                  >
                    Saiba mais <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3c0781] to-[#0d00c0] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
