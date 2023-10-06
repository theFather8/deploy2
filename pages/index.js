import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowSmallRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  Cog6ToothIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import { Bars3Icon, CheckIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <>
      <header>
        <div className="bg-[#141B2B] md:w-full w-full h-screen relative">
          <img
            src="/img/hero.avif"
            alt="hero"
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />

          <nav className="md:flex hidden justify-between items-center px-5 py-5 absolute inset-0 h-20 z-20">
            <div className="bg-indigo-500 w-9 h-9 rounded-full " />
            <div>
              <ul className="flex gap-20 items-center text-white font-semibold text-lg">
                <li>Product</li>
                <li>Features</li>
                <li>Marketplace</li>
                <li>Company</li>
              </ul>
            </div>
            <div>
              <Link
                href="#"
                className="flex items-center text-white font-semibold text-lg"
              >
                Log in <ArrowSmallRightIcon className="h-7 mt-1" />
              </Link>
            </div>
          </nav>
          {/* Mobile nav */}
          <nav className="md:hidden flex justify-between items-center p-6">
            <div className="bg-indigo-500 w-9 h-9 rounded-full" />
            <div>
              <Link href="#">
                <Bars3Icon className="h-7 text-gray-400" />
              </Link>
            </div>
          </nav>

          <section className=" mx-auto relative flex flex-col justify-center items-center h-full">
            <div className="flex flex-col gap-10 justify-center items-center max-w-7xl -mt-80 md:-mt-0">
              <div className="md:flex hidden gap-2 border border-gray-600 rounded-full py-1 px-4 ">
                <h3 className="flex text-lg text-gray-300 font-semibold">
                  Announcing our next round of funding.
                </h3>
                <Link
                  href="#"
                  className="text-lg text-white font-bold flex items-center"
                >
                  Read more
                  <ArrowSmallRightIcon className="h-6 mt-[2px]" />
                </Link>
              </div>
              <div className="text-white md:text-7xl font-bold md:w-3/4 text-center text-4xl w-full">
                <h1>Deploy to the cloud with confidence</h1>
              </div>
              <div className="text-slate-300 md:text-xl font-semibold text-center md:w-3/4 md:px-0 px-7">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  non aperiam officia soluta inventore rem perferendis suscipit
                  error, debitis adipisci quibusdam eaque voluptatibus incidunt?
                </p>
              </div>
              <div className="flex gap-7 text-white font-semibold text-lg">
                <button className="border border-indigo-500 rounded-lg bg-indigo-500 px-4 py-2">
                  Get started
                </button>
                <button className="flex items-center">
                  Live demo <ArrowSmallRightIcon className="h-6 mt-1" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap  absolute inset-x-0 bottom-0 max-w-[1500px] md:justify-between mx-auto pb-32 md:pb-10  gap-10 justify-center">
              <img
                src="/img/transistor-white.svg"
                alt="transistor"
                className="md:h-16 h-[50px]  fill-white"
              />
              <img
                src="/img/reform-white.svg"
                alt="reform"
                className="md:h-16 h-[50px] text-white"
              />
              <img
                src="/img/tuple-white.svg"
                alt="tuple"
                className="md:h-16 h-[50px] text-white"
              />
              <img
                src="/img/savvycal-white.svg"
                alt="savvycal"
                className="md:h-16 h-[50px] text-white"
              />
              <img
                src="/img/statamic-white.svg"
                alt="statamic"
                className="md:h-16 h-[50px] text-white"
              />
            </div>
          </section>
        </div>
      </header>
      <main>
        <section className="md:mt-64 mt-32">
          <div className="flex md:flex flex-col md:justify-center md:items-center gap-2 md:max-w-7xl w-full md:mx-auto md:px-0 px-5">
            <h3 className="text-xl text-indigo-500 font-semibold">
              Everything you need
            </h3>
            <h1 className="md:text-5xl text-3xl font-bold">
              No server? No problem.
            </h1>
            <p className="md:text-xl text-lg text-slate-600 font-semibold md:w-3/5 md:text-center md:mt-6 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptate dolorem quidem animi! Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="mx-auto  relative mt-20 md:px-0 px-5">
            <div className="absolute bg-gradient-to-t from-white inset-x-0 bottom-0 md:h-[600px] h-[150px] flex items-end z-20 md:translate-y-16 translate-y-14" />
            <div className="absolute bg-gradient-to-t from-white inset-x-0 bottom-0 md:h-[600px] h-[150px] flex items-end z-20 md:translate-y-16 translate-y-14" />
            <div className="h-full max-w-[1500px] relative mx-auto border-2  border-slate-200 rounded-2xl shadow-2xl shadow-slate-300 overflow-hidden">
              <img
                src="/img/screenshot.png"
                alt="screenshot"
                className="h-full  object-cover w-full "
              />
            </div>
          </div>
          <div className="max-w-[1500px] mx-auto grid md:grid-cols-3 justify-items-center md:justify-items-start gap-y-20 gap-x-10 py-20 relative -translate-y-10 z-50 md:px-0 px-5">
            <div className="flex gap-5  justify-center">
              <div>
                <CloudArrowUpIcon className="h-6 text-indigo-500" />
              </div>
              <div className="flex">
                <p className="text-lg text-slate-600 font-semibold">
                  <span className="text-lg text-black font-bold">
                    Push to deploy.
                  </span>{' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, quis.
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div>
                <LockClosedIcon className="h-6 text-indigo-500" />
              </div>
              <div className="flex">
                <p className="text-lg text-slate-600 font-semibold">
                  <span className="text-lg text-black font-bold">
                    SSL certificates.
                  </span>{' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, quis. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div>
                <ArrowPathIcon className="h-6 text-indigo-500" />
              </div>
              <div className="flex">
                <p className="text-lg text-slate-600 font-semibold">
                  <span className="text-lg text-black font-bold">
                    Simple queues.
                  </span>{' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, quis.
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div>
                <FingerPrintIcon className="h-6 text-indigo-500" />
              </div>
              <div className="flex">
                <p className="text-lg text-slate-600 font-semibold">
                  <span className="text-lg text-black font-bold">
                    Advanced security.
                  </span>{' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, quis.
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div>
                <Cog6ToothIcon className="h-6 text-indigo-500" />
              </div>
              <div className="flex">
                <p className="text-lg text-slate-600 font-semibold">
                  <span className="text-lg text-black font-bold">
                    Powerful API.
                  </span>{' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, quis. Lorem, ipsum dolor.
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div>
                <ServerIcon className="h-6 text-indigo-500" />
              </div>
              <div className="flex">
                <p className="text-lg text-slate-600 font-semibold">
                  <span className="text-lg text-black font-bold">
                    Satabase backups.
                  </span>{' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, quis.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-[570px] bg-slate-900 relative md:grid hidden grid-cols-5 ">
            <div className="h-[150px] w-[150px] top-[35%] left-[50%] z-10 absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[150px] w-[150px] top-[80%] left-[50%] z-10 absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[150px] w-[150px] top-[90%] left-[40%] z-10 absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[150px] w-[150px] top-[90%] left-[30%] z-10 absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[150px] w-[150px] top-[70%] left-[60%] z-10 absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[150px] w-[150px] top-[70%] left-[70%] z-10 absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[150px] w-[150px] top-[50%] left-[75%] z-10 absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[170px] w-[170px] bottom-[80%] left-[80%] absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="h-[150px] w-[150px] top-[10%] left-[95%] absolute rounded-full bg-purple-400 translate-x-[50%] trasnlate-y-[50%] blur-[120px]" />
            <div className="grid col-span-2 h-6 translate-x-60 -translate-y-[150%]">
              <img
                src="/img/woman.avif"
                alt="woman"
                className="object-cover absolute h-[650px] border border-hidden rounded-xl"
              />
            </div>
            <div className="grid col-span-3 content-center mt-24">
              <div className="flex flex-col gap-10">
                <p className="text-3xl text-white font-bold w-3/4 z-50">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam molestias, quo fugiat necessitatibus quas, voluptatibus
                  impedit ab voluptas soluta eaque perspiciatis! Similique
                  nostrum possimus odio autem dicta, omnis.
                </p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white">
                    Judith Black
                  </h3>
                  <h4 className="text-xl text-slate-400 font-semibold relative">
                    CEO of tuple
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden bg-slate-900 relative h-[630px] flex flex-col gap-16">
            <div className="h-52 w-10/12 mx-auto relative bg-slate-400 -translate-y-8 border rounded-2xl border-hidden overflow-hidden">
              <img
                src="/img/woman.avif"
                alt="woman"
                className="object-cover absolute h-full w-full"
              />
            </div>
            <div className="px-5 flex flex-col gap-7">
              <p className="text-xl font-bold text-white ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                molestias, quo fugiat necessitatibus quas, voluptatibus impedit
                ab voluptas soluta eaque perspiciatis! Similique nostrum
                possimus odio autem dicta, omnis.
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">
                  Judith Black
                </h3>
                <h4 className="text-lg text-slate-400 font-semibold relative">
                  CEO of Tuple
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="md:mt-[250px] mt-[130px]">
          <div className="flex flex-col gap-6 justify-center items-center max-w-7xl mx-auto md:px-0 px-5">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="md:text-lg text-xl text-indigo-500 font-semibold">
                Pricing
              </h3>
              <h1 className="md:text-5xl text-4xl font-bold text-center">
                The right price for you, whoever you are
              </h1>
            </div>
            <div>
              <p className="text-xl text-slate-600 font-semibold md:w-3/4 mx-auto text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                beatae totam consequatur dolor ut molestiae ipsam nemo.
              </p>
            </div>
          </div>
          {/* cards */}
          <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-center items-center md:mt-28 mt-20 md:px-0 px-5 md:gap-0 gap-4">
            {/* first card */}
            <div className="border-2 border-gray-200 rounded-3xl py-10 px-8 md:px-11 md:py-11 flex flex-col gap-16 justify-between z-20 md:translate-x-5 md:items-start items-center">
              <div className="flex flex-col gap-7 w-11/12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-indigo-500 font-semibold">
                    Hobby
                  </h2>
                </div>
                <div className="flex items-end">
                  <h1 className="text-5xl font-bold">$19</h1>
                  <p className="text-lg text-slate-600 font-semibold">/month</p>
                </div>
                <div>
                  <p className="text-lg text-slate-600 font-semibold">
                    The perfect plan if you{"'"}re just getting started with our
                    product.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-col gap-4">
                    <li className="flex gap-3 text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-slate-600 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-11/12 border-2 border-indigo-200 rounded-lg py-2 text-center">
                <button className="text-indigo-500 font-semibold">
                  Get started today
                </button>
              </div>
            </div>
            {/* first card */}
            {/* second card */}
            <div className="border-2 border-gray-200 rounded-3xl py-10 px-8 md:px-11 md:py-11 flex flex-col gap-16 justify-between z-50 md:-translate-x-7 bg-slate-950">
              <div className="flex flex-col gap-7 w-11/12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-indigo-500 font-semibold">
                    Enterprise
                  </h2>
                </div>
                <div className="flex items-end">
                  <h1 className="text-5xl font-bold text-white">$49</h1>
                  <p className="text-lg text-slate-200 font-semibold">/month</p>
                </div>
                <div>
                  <p className="text-lg text-slate-200 font-semibold">
                    Dedicated support and infrastructure for your company.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-col gap-4">
                    <li className="flex gap-3 text-slate-200 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-slate-200 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-slate-200 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-slate-200 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                    <li className="flex gap-3 text-slate-200 font-semibold">
                      <CheckIcon className="h-6 w-6 text-indigo-500" /> 5
                      products
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-2 border-indigo-500 bg-indigo-500 rounded-lg py-2 text-center">
                <button className="text-white font-semibold">
                  Get started today
                </button>
              </div>
            </div>
            {/* second card */}
          </div>
        </section>
      </main>
    </>
  );
}
