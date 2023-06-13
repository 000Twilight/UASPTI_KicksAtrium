import React from "react";
import './Abotus.css';

function Aboutus() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        About Us
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Kelompok NUMERO UNO
                    </p>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="team-item h-full flex items-center border-gray-200 border p-8 rounded-lg">
                            <img
                                className="team-img w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://cdn.discordapp.com/attachments/916988364551495680/1111978170783113257/1685186581632.jpg"
                                alt="pic"
                            />
                            <div className="flex-grow">
                                <h2 className="team-name text-gray-900 mb-1 title-font font-medium">Mario Richie Lim</h2>
                                <div className="team-info text-gray-500">
                                    <p className="team-kel">Kelompok 1</p>
                                    <p className="team-nim">00000067355</p>
                                    <p className="team-email">mario.richie@student.umn.ac.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="team-item h-full flex items-center border-gray-200 border p-8 rounded-lg">
                            <img
                                className="team-img w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://cdn.discordapp.com/attachments/916988364551495680/1112394969655812168/1685285866513.jpg"
                                alt="pic"
                            />
                            <div className="flex-grow">
                                <h2 className="team-name text-gray-900 mb-1 title-font font-medium">Alexander Bryan</h2>
                                <div className="team-info text-gray-500">
                                    <p className="team-kel">Kelompok 1</p>
                                    <p className="team-nim">00000065475</p>
                                    <p className="team-email">alexander.bryan@student.umn.ac.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="team-item h-full flex items-center border-gray-200 border p-8 rounded-lg">
                            <img
                                alt="pic"
                                className="team-img w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://cdn.discordapp.com/attachments/916988364551495680/1111978175451373740/1685186628033.jpg"
                            />
                            <div className="flex-grow">
                                <h2 className="team-name text-gray-900 mb-1 title-font font-medium">Caesar Nathanael Eka</h2>
                                <div className="team-info text-gray-500">
                                    <p className="team-kel">Kelompok 1</p>
                                    <p className="team-nim">00000067638</p>
                                    <p className="team-email">caesar.nathanel@student.umn.ac.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="team-item h-full flex items-center border-gray-200 border p-8 rounded-lg">
                            <img
                                alt="pic"
                                className="team-img w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://media.discordapp.net/attachments/916988364551495680/1112395676433776691/20230417_124501.jpg?width=496&height=662"
                            />
                            <div className="flex-grow">
                                <h2 className="team-name text-gray-900 mb-1 title-font font-medium">Aero Jacques</h2>
                                <div className="team-info text-gray-500">
                                    <p className="team-kel">Kelompok 1</p>
                                    <p className="team-nim">00000067630</p>
                                    <p className="team-email">aero.jacques@student.umn.ac.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="team-item h-full flex items-center border-gray-200 border p-8 rounded-lg">
                            <img
                                alt="pic"
                                className="team-img w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://cdn.discordapp.com/attachments/916988364551495680/1112394969941016626/Screenshot_20230514_205600_Instagram.jpg"
                            />
                            <div className="flex-grow">
                                <h2 className="team-name text-gray-900 mb-1 title-font font-medium">Marco Julius Gregory</h2>
                                <div className="team-info text-gray-500">
                                    <p className="team-kel">Kelompok 1</p>
                                    <p className="team-nim">00000067321</p>
                                    <p className="team-email">marco.julius@student.umn.ac.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;