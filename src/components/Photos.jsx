import React from 'react';
import pogba from '../foto/pogba.png';
import dame from '../foto/dame.png';
import yeezy from '../foto/yeezy.png';
import mj from '../foto/mj.png';
import vogue from '../foto/vogue.png';
import hugo from '../foto/hugo.png';
import "./Photos.css";

function Photos() {
    return (
        <section className="GalleryLL text-gray-600 body-font">
            <div className="container px-5 pb-10 mx-auto my-10">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Kick's Atrium<br />[kicks-a-tri-yom]</h1>
                    <p className="InfoLL lg:w-2/3 mx-auto leading-relaxed text-base">
                        Kick's Atrium is an Indonesian online platform that offers various sneakers through primary and resale markets. Founded in 2023, Kick's Atrium provide access to the world’s most coveted sneakers in the smartest way possible.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative h-80">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pogba} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Kick's Atrium
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Predator Accuracy Paul Pogba
                                </h1>
                                <p className="leading-relaxed">
                                    High Definition Texture on the strike zone adds precision to your play.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative h-80">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={dame} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Kick's Atrium
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Dame 8 G.O.A.T. Spirit
                                </h1>
                                <p className="leading-relaxed">
                                    The outsole and Bounce Pro midsole are designed specifically for Dame's lethal combination of speed and precision.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative h-80">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={yeezy} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Kick's Atrium
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Yeezy Boost 350 V2 Beluga 2.0
                                </h1>
                                <p className="leading-relaxed">
                                    While the original colorway featured bright orange stripe, the 2017 Yeezy Beluga colorway is much more subtle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative h-80">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={mj} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Kick's Atrium
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Jordan 1 Retro High OG Patent Bred
                                </h1>
                                <p className="leading-relaxed">
                                    The Air Jordan 1 High Bred Patent features black and red patent leather upper with signature weaved Nike Air tongue labels.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative h-80">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={hugo} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Kick's Atrium
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Massimo Dutti Leather Trainers
                                </h1>
                                <p className="leading-relaxed">
                                    This shoe features a white leather upper with black accents on the stripes and heel tab.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative h-80">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={vogue} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Kick's Atrium
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    MSCHF AC1 Grey
                                </h1>
                                <p className="leading-relaxed">
                                    The MSCHF AC1 uses a molded, neoprene-lined TPU upper for extreme flexibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Photos;